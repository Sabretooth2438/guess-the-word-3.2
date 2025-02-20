const Hangman = ({ wrongGuesses }) => {
  const hangmanStages = [
    "🟢", // 0 incorrect guesses
    "🔴", // 1 incorrect guess
    "🔴🔴",
    "🔴🔴🔴",
    "🔴🔴🔴🔴",
    "🔴🔴🔴🔴🔴",
    "🔴🔴🔴🔴🔴🔴",
    "🔴🔴🔴🔴🔴🔴🔴",
    "🔴🔴🔴🔴🔴🔴🔴🔴",
    "🔴🔴🔴🔴🔴🔴🔴🔴🔴",
    "💀 Game Over!", // 10 incorrect guesses
  ];

  return (
    <div>
      <h3>Hangman Progress</h3>
      <p>{hangmanStages[wrongGuesses]}</p>
    </div>
  );
};

export default Hangman;
