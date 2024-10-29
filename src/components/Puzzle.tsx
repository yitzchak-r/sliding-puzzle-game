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
