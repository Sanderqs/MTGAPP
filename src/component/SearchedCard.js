import React from "react";

//styles
import { StyledImg, StyledCard } from "./SearchElements";

const SearchedCard = ({ image, name, rules }) => {
  return (
    <div className="jagoedhoor">
      <StyledCard>
        <StyledImg src={image} alt={name} />
        {rules && (
          <>
            <>
              {rules.map((rule) => (
                <div key={rule}>
                  <p>Date:</p>
                  {rule.published_at}
                  <p>Rules:</p>
                  {rule.comment}
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
