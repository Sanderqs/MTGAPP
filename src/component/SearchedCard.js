import React from "react";

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
  return (
    <div className="jagoedhoor">
      <StyledCard>
        <StyledImg src={image} alt={name} onClick={getRulings} />
        {rules && (
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
        )}
      </StyledCard>
    </div>
  );
};

export default SearchedCard;
