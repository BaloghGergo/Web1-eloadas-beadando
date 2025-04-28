import { useState } from 'react';

function GuessNumber() {
  const [secret] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const checkGuess = () => {
    const num = Number(guess);
    if (num === secret) {
      setMessage('Eltaláltad! 🎉');
    } else if (num < secret) {
      setMessage('Túl kicsi!');
    } else {
      setMessage('Túl nagy!');
    }
  };

  return (
    <div>
      <h2>Guess the Number</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={checkGuess}>Tipp!</button>
      <p>{message}</p>
    </div>
  );
}

export default GuessNumber;
