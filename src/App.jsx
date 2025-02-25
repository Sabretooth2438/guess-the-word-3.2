import { useState, useEffect } from 'react'
import './App.css'
import { getRandomWord } from './utils'
import Hangman from './Hangman'

const App = () => {
  const [currWord, setCurrentWord] = useState(getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [remainingGuesses, setRemainingGuesses] = useState(10)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)
  const [winCount, setWinCount] = useState(0)
  const [lossCount, setLossCount] = useState(0)

  const generateWordDisplay = () => {
    return currWord
      .split('')
      .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
      .join(' ')
  }

  const handleInputChange = (event) => {
    const letter = event.target.value.toLowerCase()

    if (letter.length === 1 && /^[a-z]$/.test(letter)) {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters([...guessedLetters, letter])

        if (!currWord.includes(letter)) {
          setRemainingGuesses((prevGuesses) => prevGuesses - 1)
        }
      }
    }

    setInputValue('')
  }

  const checkGameStatus = () => {
    if (currWord.split('').every((letter) => guessedLetters.includes(letter))) {
      setWin(true)
      setGameOver(true)
      setWinCount(winCount + 1)
    } else if (remainingGuesses <= 0) {
      setGameOver(true)
      setLossCount(lossCount + 1)
    }
  }

  useEffect(() => {
    checkGameStatus()
  }, [guessedLetters, remainingGuesses])

  const resetGame = () => {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
    setRemainingGuesses(10)
    setGameOver(false)
    setWin(false)
  }

  return (
    <>
      <div className="card">
        <h1>Guess The Word 🚀</h1>

        <Hangman wrongGuesses={10 - remainingGuesses} />

        <h3>Word Display</h3>
        <p>{generateWordDisplay()}</p>
        <h3>Guessed Letters</h3>
        <p>{guessedLetters.length > 0 ? guessedLetters.join(', ') : '-'}</p>
        <h3>Remaining Guesses: {remainingGuesses}</h3>

        <h3>Scoreboard</h3>
        <p>
          ✅ Wins: {winCount} | ❌ Losses: {lossCount}
        </p>

        {gameOver ? (
          <div>
            <h2 className={win ? 'winning-message' : 'game-over'}>
              {win
                ? '🎉 You Won! 🎉'
                : `❌ You Lost! The word was "${currWord}".`}
            </h2>
            <button onClick={resetGame}>Play Again</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              maxLength="1"
              pattern="[a-zA-Z]"
              required
            />
          </div>
        )}
      </div>
    </>
  )
}

export default App
