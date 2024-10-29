import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { shuffleTiles, isMoveValid } from "../utils/puzzleUtils";
import ResetButton from "./ResetButton";

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

  const handleTileClick = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    if (isMoveValid(index, emptyIndex, GRID_SIZE)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
    }
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

export default Puzzle;
