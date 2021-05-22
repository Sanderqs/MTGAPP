import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "../reducers/land";
import { setDraft, updateCard, setStandard, setEdh } from "../reducers/land";

//styles
import {
  StyledSetMode,
  StyledButton,
  StyledH1,
  StyledInput,
} from "./SetCardsElements";
//Toekomst vink toevoegen o je land te locken en funtie om onderlinge kaarten
// altijd het totaal, de total cards zijn.
const SetCards = (props) => {
  const cards = useSelector((state) => state.landReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledH1>Set Mode</StyledH1>
      <StyledSetMode>
        <StyledButton onClick={() => dispatch(setDraft())}>Draft</StyledButton>
        <StyledButton onClick={() => dispatch(setStandard())}>
          Standard
        </StyledButton>
        <StyledButton onClick={() => dispatch(setEdh())}>EDH</StyledButton>
      </StyledSetMode>

      <StyledSetMode>
        <div>
          land{" "}
          <StyledInput
            type="number"
            value={cards.land}
            onChange={(e) => {
              dispatch(updateCard("land", Number(e.target.value)));
            }}
          />
        </div>
        <div>
          nonland{" "}
          <StyledInput
            type="number"
            min="0"
            value={cards.nonland}
            onChange={(e) => {
              dispatch(updateCard("nonland", Number(e.target.value)));
            }}
          />
        </div>
        <div>
          <div>
            total{" "}
            <StyledInput
              type="number"
              value={cards.land + cards.nonland}
              onChange={(e) => {
                dispatch(updateTotal(Number(e.target.value)));
              }}
            />
          </div>
        </div>
      </StyledSetMode>
    </div>
  );
};

export default SetCards;
