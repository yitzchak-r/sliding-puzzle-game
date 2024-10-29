import { useState, useEffect } from "react";
import styled from "styled-components";

const GRID_SIZE = 3;

const Puzzle: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>([]);

  useEffect(() => {
    resetPuzzle();
  }, []);

  const resetPuzzle = () => {
    const shuffledTiles = shuffleTiles([
      ...Array(GRID_SIZE * GRID_SIZE).keys(),
    ]);
    setTiles(shuffledTiles);
  };

  const shuffleTiles = (tiles: number[]): number[] => {
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    return tiles;
  };

  const handleTileClick = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    if (isMoveValid(index, emptyIndex)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
    }
  };

  const isMoveValid = (tileIndex: number, emptyIndex: number): boolean => {
    const tileRow = Math.floor(tileIndex / GRID_SIZE);
    const tileCol = tileIndex % GRID_SIZE;
    const emptyRow = Math.floor(emptyIndex / GRID_SIZE);
    const emptyCol = emptyIndex % GRID_SIZE;

    return (
      (Math.abs(tileRow - emptyRow) === 1 && tileCol === emptyCol) ||
      (Math.abs(tileCol - emptyCol) === 1 && tileRow === emptyRow)
    );
  };
  return (
    <PuzzleContainer>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          onClick={() => handleTileClick(index)}
          isEmpty={tile === 0}
        >
          {tile !== 0 && tile}
        </Tile>
      ))}
      <ResetButton onClick={resetPuzzle}>Reset</ResetButton>
    </PuzzleContainer>
  );
};

export default Puzzle;

// עיצוב הקומפוננטות בעזרת styled-components
const PuzzleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${GRID_SIZE}, 100px);
  gap: 5px;
`;

const Tile = styled.div<{ isEmpty: boolean }>`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: ${({ isEmpty }) => (isEmpty ? "transparent" : "black")};
  background-color: ${({ isEmpty }) => (isEmpty ? "lightgray" : "#4CAF50")};
  cursor: ${({ isEmpty }) => (isEmpty ? "default" : "pointer")};
  border-radius: 4px;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
