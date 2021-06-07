import React, { useRef, useEffect, useCallback, useState } from "react";

//Import Dependencies
import { useSpring, animated } from "react-spring";
import Typography from "@material-ui/core/Typography";
//Import Styles
import {
  StyledBackground,
  StyledCardImage,
  StyledCloseModal,
  StyledModalContent,
  StyledModalWrapper,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "./ModalElements";

//TODO:
// 1. Accordion toevoegen met data card.
// 2. Styling
// 3. rules werkt nu wel maar moet die [0] oplossen

const Modal = ({ showModal, setShowModal, rulesImage, rule, price }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });

  //Open/Close Modal
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

  //Accordion
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  console.log(rule);

  // const { comment } = rule[0];
  return (
    <>
      {showModal ? (
        <StyledBackground ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <StyledModalWrapper showModal={showModal}>
              <StyledCardImage src={rulesImage} />
              <StyledModalContent>
                <div>
                  <Accordion
                    square
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>Rules</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {rule &&
                          rule.map((r) => (
                            <div>
                              <div>
                                <p>Date: {r.published_at}</p>

                                {r.comment}
                              </div>
                              <div>
                                <br />
                              </div>
                            </div>
                          ))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>€ {price}</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
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
