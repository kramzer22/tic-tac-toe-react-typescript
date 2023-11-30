import "./winner.css";

interface winnerProps {
  winner: string;
  xScore: number;
  oScore: number;
  handleRestartGame: () => void;
  handleResetGame: () => void;
}

// Display pop up component for winning information

function Winner({
  winner,
  xScore,
  oScore,
  handleRestartGame,
  handleResetGame,
}: winnerProps) {
  return (
    <div className="popup-container">
      <div className="winner-display-container">
        <p>Winner: {winner}</p>
        <div>
          <p>X: {xScore}</p>
          <p>O: {oScore}</p>
        </div>
        <div>
          <button onClick={handleRestartGame}>PLAY AGAIN</button>
          <button onClick={handleResetGame}>RESET GAME</button>
        </div>
      </div>
    </div>
  );
}

export default Winner;
