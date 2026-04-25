import { useState } from "react";

export default function Tictac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    // Your code here
    // Check all winning combinations
    // Return 'X', 'O', or null
    const combinations = [
      [0, 1, 2],
      [2, 5, 8],
      [0, 3, 6],
      [6, 7, 8],
      [0, 4, 8],
      [1, 4, 7],
      [3, 4, 5],
      [2, 4, 6],
    ];

    const isXWinner = combinations.some((c) =>
      c.every((i) => squares[i] === "x"),
    );
    if (isXWinner) return "X";

    const isYWinner = combinations.some((c) =>
      c.every((i) => squares[i] === "y"),
    );

    if (isYWinner) return "Y";

    return null;
  };

  const handleClick = (index) => {
    // Your code here
    // 1. Check if cell is already filled or game is over
    // 2. Update board with current player's symbol
    // 3. Switch to next player

    if (board.every((c) => !!c) || winner) {
      return;
    }

    const gamer = isXNext ? "x" : "o";

    setBoard((prev) => {
      const array = [...prev];
      array[index] = gamer;
      return array;
    });

    setIsXNext((prev) => !prev);
  };

  const resetGame = () => {
    // Your code here
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every((cell) => cell !== null);
  const isDraw = !winner && isBoardFull;

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>

      <div className="status">{status}</div>

      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${cell ? "filled" : ""}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="restart-button" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}
