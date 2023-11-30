import Tile from "./Tile";

import "./board.css";

interface boardProps {
  playerTurnState: {
    player_turn: string;
    set_turn: (turn: string) => void;
  };
  boardState: {
    board: string[][];
    set_board: (newBoard: string[][]) => void;
  };
}

// Board component for the game

function Board({ playerTurnState, boardState }: boardProps) {
  // handle event for tile clicks setting players turn on
  // the tile they choose

  const handleTileClick = (
    e: React.MouseEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => {
    if (boardState.board[row][col] === "") {
      if (playerTurnState.player_turn === "X") {
        playerTurnState.set_turn("O");
      } else {
        playerTurnState.set_turn("X");
      }
      const updatedBoard = [...boardState.board];
      updatedBoard[row][col] = playerTurnState.player_turn;

      boardState.set_board(updatedBoard);

      e.currentTarget.textContent = playerTurnState.player_turn;
    }
  };

  return (
    <div className="board">
      {boardState.board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, cellIndex) => (
            <Tile
              key={cellIndex}
              className={`tile ${cell !== "" ? cell : ""}`}
              display={cell}
              onClick={(e) => handleTileClick(e, rowIndex, cellIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
