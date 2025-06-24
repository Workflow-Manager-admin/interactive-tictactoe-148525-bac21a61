import React from 'react';

const Board = ({ squares, onClick }) => {
  return (
    <div className="game-board">
      {squares.map((square, i) => (
        <button
          key={i}
          className={`square ${square?.toLowerCase() || ''}`}
          onClick={() => onClick(i)}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
