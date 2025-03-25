import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);


  return (
    <div className="App">
      <h1>Snake Game</h1>
      <div className="score">Score: {score}</div>
      <div className="game-board">
      </div>
    </div>
  );
}

export default App;
