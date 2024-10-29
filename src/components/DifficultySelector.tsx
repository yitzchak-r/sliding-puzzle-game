import React from "react";
import styled from "styled-components";

const SelectorContainer = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface DifficultySelectorProps {
  onSelectDifficulty: (size: number) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  onSelectDifficulty,
}) => {
  return (
    <SelectorContainer>
      <span>Select a size</span>
      <Button onClick={() => onSelectDifficulty(3)}> (3x3)</Button>
      <Button onClick={() => onSelectDifficulty(4)}> (4x4)</Button>
      <Button onClick={() => onSelectDifficulty(5)}> (5x5)</Button>
    </SelectorContainer>
  );
};

export default DifficultySelector;
