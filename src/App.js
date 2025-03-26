import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);


  return (
    <div className="App">
      <h1>Snake Game</h1>
      <div className="score">Score: {score}</div>
      <div className="game-board">
        {Array.from({ length: 20 }).map((_, row) => (
          <div key={row} className="row">
            {Array.from({ length: 20 }).map((_, col) => {
              const isSnake = snake.some(
                segment => segment[0] === row && segment[1] === col
              );
              const isFood = food[0] === row && food[1] === col;
              return (
                <div
                  key={col}
                  className={`cell ${isSnake ? 'snake' : ''} ${
                    isFood ? 'food' : ''
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Final Score: {score}</p>
        </div>
      )}
    </div>
  );
}

export default App;
