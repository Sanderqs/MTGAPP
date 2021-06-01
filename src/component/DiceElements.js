import styled from "styled-components";

//import Icons
import { GiRollingDices } from "react-icons/gi";

export const StyledDiceImage = styled.img`
  height: 400px;
  width: 400px;
`;
export const StyledRollingDice = styled(GiRollingDices)`
  color: red;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
