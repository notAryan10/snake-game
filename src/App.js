import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  const generateFood = () => {
    let newFood;
    do {
      newFood = [
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20)
      ];
    } while (snake.some(segment => segment[0] === newFood[0] && segment[1] === newFood[1]));
    return newFood;
  };

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = [...newSnake[0]];

      switch (direction) {
        case 'UP':
          head[0] -= 1;
          break;
        case 'DOWN':
          head[0] += 1;
          break;
        case 'LEFT':
          head[1] -= 1;
          break;
        case 'RIGHT':
          head[1] += 1;
          break;
        default:
          break;
      }

      if (
        head[0] < 0 || 
        head[0] >= 20 || 
        head[1] < 0 || 
        head[1] >= 20 ||
        newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])
      ) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);

      if (head[0] === food[0] && head[1] === food[1]) {
        setScore(score + 1);
        setFood(generateFood());
        setSpeed(prevSpeed => Math.max(50, prevSpeed - 5));
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [snake, direction, food, gameOver, score, speed]);

  const resetGame = () => {
    const initialSnake = [[5, 5]];
    setSnake(initialSnake);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setSpeed(150);
  };

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
              const isHead = snake[0][0] === row && snake[0][1] === col;
              const isFood = food[0] === row && food[1] === col;
              return (
                <div
                  key={col}
                  className={`cell ${isSnake ? 'snake' : ''} ${
                    isFood ? 'food' : ''
                  } ${isHead ? 'snake-head' : ''}`}
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
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
