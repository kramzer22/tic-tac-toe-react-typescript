interface scoreProps {
  playerScore: number;
  player: string;
}

// Score component displaying the score of the player

function PlayerScore({ playerScore, player }: scoreProps) {
  return <p className="score-display">{`${player} SCORE: ${playerScore}`}</p>;
}

export default PlayerScore;
