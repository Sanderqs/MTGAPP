import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import {
  StyledBackground,
  StyledCardImage,
  StyledCloseModal,
  StyledModalContent,
  StyledModalWrapper,
} from "./ModalElements";

const Modal = ({ showModal, setShowModal, rulesImage }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <StyledBackground ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <StyledModalWrapper showModal={showModal}>
              <StyledCardImage src={rulesImage} />
              <StyledModalContent>
                <h1>content</h1>
              </StyledModalContent>
              <StyledCloseModal
                aria-label="Close Modal"
                onClick={() => setShowModal((prev) => !prev)}
              ></StyledCloseModal>
            </StyledModalWrapper>
          </animated.div>
        </StyledBackground>
      ) : null}
    </>
  );
};

export default Modal;
