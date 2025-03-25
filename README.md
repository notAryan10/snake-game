**🐍 React.js Snake Game**

A simple and interactive Snake Game built using React.js. The player controls a snake that moves in a grid, consumes food to grow, and avoids collisions to keep the game going.

🚀 Features

Move the snake using arrow keys.

The snake grows when it eats food.

Game Over when the snake collides with itself or the wall.

Randomly generated food on the grid.

Dynamic speed adjustments (optional enhancement).

🛠️ Technologies Used

React.js (Functional Components + Hooks)

JavaScript (ES6+)

CSS Grid for game layout

📂 Project Setup

Follow these steps to clone and run the game:

1️⃣ Clone the Repository

 git clone https://github.com/yourusername/snake-game.git
 cd snake-game

2️⃣ Install Dependencies

 npm install

3️⃣ Start the Game

 npm start

The game will run on http://localhost:3000/ by default.

🎮 How to Play

Use the Arrow Keys (⬆️⬇️⬅️➡️) to move the snake.

Eat the red food dot to grow longer.

Avoid hitting the walls and your own body.

The game ends when a collision occurs.

📜 Code Breakdown

1. Game Components

SnakeGame.js → Handles game logic (movement, collision, food generation).

Snake.js → Renders the snake based on state.

Food.js → Renders food at a random position.

2. Key Functions

handleKeyDown(event) → Changes snake direction based on user input.

moveSnake() → Moves the snake at a set interval.

checkCollision(head) → Ends game if snake collides with itself or walls.

checkFood(head, newSnake) → Grows snake and places new food.



