const FunFactCard = ({ fact, onNext }) => {
  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border rounded-lg bg-white text-center shadow-sm">
      <p className="text-lg mb-6">{fact}</p>

      <button
        onClick={onNext}
        className="px-4 py-2 border rounded hover:bg-black hover:text-white transition"
      >
        new fun fact →
      </button>
    </div>
  )
}

export default FunFactCard
