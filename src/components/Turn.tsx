interface turnProps {
  playerTurn: string;
}

// Display component for displaying which player
// is on turn

function Turn({ playerTurn }: turnProps) {
  return <p className="turn-display">{`CURRENT TURN: ${playerTurn}`}</p>;
}

export default Turn;
