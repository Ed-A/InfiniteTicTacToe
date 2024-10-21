# Infinite Tic-Tac-Toe

**Infinite Tic-Tac-Toe** is a unique version of the classic Tic-Tac-Toe game. The game does not end until a player wins, and there is a blinking effect on the oldest move, which is replaced by the next move. The game continues to allow moves even after three have been played by each player, maintaining a dynamic and interactive experience.

## Features
- **Endless Play:** The game continues indefinitely until one of the players wins (X or O).
- **Blinking Moves:** The oldest move for each player will blink, adding a visual element to the gameplay.
- **Win Conditions:** 
    - Detects diagonal, horizontal, and vertical wins.
    - Upon winning, the game ends with a notification and an option to reload the game.
- **Undo Mechanism:** Once a player has made more than three moves, the oldest move stops blinking, and the latest move begins to blink.

## How to Play
1. Open the webpage.
2. Click on any empty cell to place your mark (`X` or `O`).
3. The game will alternate between `X` and `O` for each turn.
4. After three moves, the most recent move will blink.
5. The game continues indefinitely until there is a winner.
6. Once a player wins, a message will display, and you can reload the game.

## Files
- `index.html`: Contains the main HTML structure for the game.
- `style.css`: Includes the styling for the game grid and blinking effect.
- `script.js`: Handles the game logic, win conditions, blinking effect, and event listeners.
- `X.png`: PNG format image for X piece.
- `O.png`: PNG format image for O piece.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/infinite-tictactoe.git
    ```
2. Open `index.html` in your browser to start playing the game.

## Contributions
Feel free to submit issues or pull requests for improvements or new features!

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
