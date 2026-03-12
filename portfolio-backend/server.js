import express from "express";
import fetch from "node-fetch";

const app = express();

const ACCESS_TOKEN = "YOUR_STRAVA_ACCESS_TOKEN";

app.get("/api/runs", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=10",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );

    const activities = await response.json();

    const runs = activities.filter(a => a.type === "Run");

    res.json(runs);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));