import { useState, useEffect } from "react";

import Board from "./components/Board";
import PlayerScore from "./components/PlayerScore";
import Turn from "./components/Turn";
import Winner from "./components/Winner.tsx";

import gameHelpers from "./helpers/gameHelpers.ts";

import "./App.css";

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [playerTurn, setPlayerTurn] = useState("X");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const result = gameHelpers.checkBoardForWinners(board);
    if (result) {
      result === "X" ? setXScore(xScore + 1) : setOScore(oScore + 1);
      setWinner(result);
    }
  }, [board]);

  const handleRestartGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);

    setPlayerTurn("X");
    setWinner("");
  };

  const handleResetGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);

    setPlayerTurn("X");
    setWinner("");
    setXScore(0);
    setOScore(0);
  };

  return (
    <div className="app-container">
      <Board
        boardState={{ board: board, set_board: setBoard }}
        playerTurnState={{ player_turn: playerTurn, set_turn: setPlayerTurn }}
      />
      <div className="information-container">
        <div className="score-container">
          <PlayerScore playerScore={xScore} player="X" />
          <PlayerScore playerScore={oScore} player="O" />
        </div>
        <Turn playerTurn={playerTurn} />
      </div>
      <div className="controls-container">
        <button className="control-button" onClick={handleRestartGame}>
          RESTART
        </button>
        <button className="control-button reset" onClick={handleResetGame}>
          RESET
        </button>
      </div>
      {winner !== "" && (
        <Winner
          winner={winner}
          xScore={xScore}
          oScore={oScore}
          handleRestartGame={handleRestartGame}
          handleResetGame={handleResetGame}
        />
      )}
    </div>
  );
}

export default App;
