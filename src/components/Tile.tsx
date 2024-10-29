import styled from "styled-components";

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

export default Tile;
