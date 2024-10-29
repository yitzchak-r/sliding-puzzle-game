import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { shuffleTiles, isMoveValid } from "../utils/puzzleUtils";
import ResetButton from "./ResetButton";
import Tile from "./Tile";
import DifficultySelector from "./DifficultySelector";

const Puzzle: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [gridSize, setGridSize] = useState<number>(3);

  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

  useEffect(() => {
    resetPuzzle();
  }, [gridSize]);

  const resetPuzzle = () => {
    const shuffledTiles = shuffleTiles([...Array(gridSize * gridSize).keys()]);
    setTiles(shuffledTiles);
    setIsGameFinished(false);
  };

  const handleTileClick = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    if (isMoveValid(index, emptyIndex, gridSize)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);

      if (isPuzzleSolved(newTiles)) {
        setIsGameFinished(true);
      }
    }
  };

  const isPuzzleSolved = (tiles: number[]) => {
    return tiles.join("") === [...Array(gridSize * gridSize).keys()].join("");
  };

  return (
    <PuzzleContainer>
      {isGameFinished && (
        <GameFinishedMessage>
          Congratulations! You solved the puzzle!
        </GameFinishedMessage>
      )}
      <DifficultySelector onSelectDifficulty={setGridSize} />

      <GridContainer gridSize={gridSize}>
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            onClick={() => handleTileClick(index)}
            isEmpty={tile === 0}
          >
            {tile !== 0 && tile}
          </Tile>
        ))}
      </GridContainer>
      <ResetButton onClick={resetPuzzle}>Reset</ResetButton>
    </PuzzleContainer>
  );
};

const PuzzleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const GridContainer = styled.div<{ gridSize: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridSize}, 100px);
  gap: 5px;
  margin-bottom: 20px;
`;

const GameFinishedMessage = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: green;
`;

export default Puzzle;
