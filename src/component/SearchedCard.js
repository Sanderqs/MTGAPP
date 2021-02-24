import React from "react";

const SearchedCard = ({ image, name, rules }) => {
  console.log(rules);
  return (
    <div>
      {name}
      <br />
      <img src={image} alt={name} />
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
    </div>
  );
};

export default SearchedCard;
