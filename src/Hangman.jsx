import React from 'react';
import './App.css'; // Import the CSS file

const Hangman = ({ wrongGuesses }) => {
  return (
    <div className="hangman-container">
      <h3>Hangman Progress</h3>
      <svg width="250" height="300" className="hangman-svg">
        {/* Gallows */}
        {wrongGuesses > 0 && <line className="gallows" x1="20" y1="280" x2="150" y2="280" />} {/* Base */}
        {wrongGuesses > 1 && <line className="gallows" x1="80" y1="280" x2="80" y2="40" />} {/* Vertical Pole */}
        {wrongGuesses > 2 && <line className="gallows" x1="80" y1="40" x2="160" y2="40" />} {/* Top Bar */}
        {wrongGuesses > 3 && <line className="gallows" x1="160" y1="40" x2="160" y2="70" />} {/* Rope */}

        {/* Hangman Parts */}
        {wrongGuesses > 4 && <circle className="hangman-part head" cx="160" cy="90" r="20" />} {/* Head */}
        {wrongGuesses > 5 && <line className="hangman-part body" x1="160" y1="110" x2="160" y2="170" />} {/* Body */}
        {wrongGuesses > 6 && <line className="hangman-part arm" x1="160" y1="130" x2="140" y2="150" />} {/* Left Arm */}
        {wrongGuesses > 7 && <line className="hangman-part arm" x1="160" y1="130" x2="180" y2="150" />} {/* Right Arm */}
        {wrongGuesses > 8 && <line className="hangman-part leg" x1="160" y1="170" x2="140" y2="210" />} {/* Left Leg */}
        {wrongGuesses > 9 && <line className="hangman-part leg" x1="160" y1="170" x2="180" y2="210" />} {/* Right Leg */}
      </svg>
    </div>
  );
};

export default Hangman;
