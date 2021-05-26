import React, { useState } from "react";
import Modal from "./Modal";

//styles
import { StyledImg, StyledCard } from "./SearchElements";

const SearchedCard = ({
  image,
  name,
  rules,
  rulesImage,
  getRulings,
  price,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="jagoedhoor">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        rulesImage={rulesImage}
      />
      <StyledCard>
        <StyledImg
          src={image}
          alt={name}
          onClick={() => {
            getRulings();
            openModal();
          }}
        />
      </StyledCard>

      {/* {rules && (
        <>
          <>
            {rules.map((rule) => (
              <div key={rule}>
                <StyledImg src={rulesImage} />
                <p>Date:</p>
                {rule.published_at}
                <p>Rules:</p>
                {rule.comment}
                <p>price</p>
                {price}
              </div>
            ))}
          </>
        </>
      )} */}
    </div>
  );
};

export default SearchedCard;
