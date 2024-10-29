import { useState, useEffect } from "react";
import styled from "styled-components";

const GRID_SIZE = 3;

const Puzzle: React.FC = () => {
 
    const [tiles, setTiles] = useState<number[]>([]);
  
    useEffect(() => {
      resetPuzzle();
    }, []);
  
    const resetPuzzle = () => {
      const shuffledTiles = shuffleTiles([...Array(GRID_SIZE * GRID_SIZE).keys()]); 
      setTiles(shuffledTiles);
    };
  