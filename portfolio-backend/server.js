import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

const {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_REFRESH_TOKEN,
} = process.env;

async function getAccessToken() {
  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: STRAVA_REFRESH_TOKEN,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to refresh token: ${res.status} ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

app.get("/runs", async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=10",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: "Failed to fetch activities", detail: text });
    }

    const activities = await response.json();
    const runs = activities
      .filter((a) => a.type === "Run")
      .map((run) => ({
        id: run.id,
        name: run.name,
        distance: run.distance,
        moving_time: run.moving_time,
        start_date: run.start_date,
        average_speed: run.average_speed,
        total_elevation_gain: run.total_elevation_gain,
        summary_polyline: run.map?.summary_polyline ?? null,
      }));

    res.json(runs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

// No app.listen() — Vercel handles this
export default app;