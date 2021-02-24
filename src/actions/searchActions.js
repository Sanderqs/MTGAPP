import axios from "axios";

import { cardNamesURL, searchCardURL, rulingsURL } from "../api";

export const fetchSearch = (card_name) => async (dispatch) => {
  const searchCard = await axios.get(searchCardURL(card_name));
  console.log(card_name);
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchCard.data,
    },
  });
};
export const fetchAllCards = () => async (dispatch) => {
  const allCards = await axios.get(cardNamesURL());
  console.log(allCards);
  dispatch({
    type: "FETCH_ALLCARDS",
    payload: {
      allCards: allCards.data,
    },
  });
};

export const fetchRulings = (card_id) => async (dispatch) => {
  const cardRulings = await axios.get(rulingsURL(card_id));

  dispatch({
    type: "FETCH_RULINGS",
    payload: {
      cardRulings: cardRulings.data,
    },
  });
  console.log(cardRulings.data);
};
