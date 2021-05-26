import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalWrapper = styled.div`
  width: 600px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-rows: 1fr 2fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    width: 460px;
    height: 600px;
  } ;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top left;
  border-radius: 10px 10px 0 0;
  background: #000;
  margin-top: 0;
  margin-left: 0;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;
export const StyledCloseModal = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: white;
`;
