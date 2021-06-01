import styled from "styled-components";

//Import Icons
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";


export const StyledLifeCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 30vh;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  background: green;
`;
export const StyledLifeTotal = styled.h1`
  color: red;
`;
export const StyledMinButton = styled(FiMinusCircle)`
  height: 32px;
  width: 32px;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledPlusButton = styled(FiPlusCircle)`
  height: 32px;
  width: 32px;
  &:hover {
    cursor: pointer;
  }
`;
