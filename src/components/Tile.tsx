import "./tile.css";

// Tile component for the board

interface TileProps {
  className: string;
  display: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Tile({ className, display, onClick }: TileProps) {
  return (
    <div className={className} onClick={onClick}>
      {display}
    </div>
  );
}

export default Tile;
