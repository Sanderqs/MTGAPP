import styled from "styled-components";

export const StyledImg = styled.img`
  height: 55vh;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledH1 = styled.h1`
  color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledCard = styled.div`
  display: flex;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  background: #eef5ee;
  &:hover {
    cursor: pointer;
  }
`;
