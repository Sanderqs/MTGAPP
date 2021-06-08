import React, { useState } from "react";

//import components
import Modal from "./Modal";

//styles
import { StyledImg, StyledCard } from "./SearchElements";

//TODO:
// 1.
// 2.

const SearchedCard = ({ image, name, rule, rulesImage, getRulings, price }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(rule);
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
  };
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="jagoedhoor">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        rulesImage={rulesImage}
        rule={rule}
        price={price}
      />
      <StyledCard>
        <StyledImg
          src={image}
          alt={name}
          onClick={() => {
            getRulings();
            openModal();
            loadDetailHandler();
          }}
        />
      </StyledCard>
    </div>
  );
};

export default SearchedCard;
