import styled from "styled-components";

//import Icons
import { GiRollingDices } from "react-icons/gi";

export const StyledDiceImage = styled.img`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
`;
export const StyledRollingDice = styled(GiRollingDices)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
