const initialState = {
  search: null,
  allCards: [],
  cardRulings: null,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return {
        ...state,
        search: action.payload.search,
      };

    case "FETCH_ALLCARDS":
      return {
        ...state,
        allCards: action.payload.allCards.data,
      };

    case "FETCH_RULINGS":
      return {
        ...state,
        cardRulings: action.payload.cardRulings.data,
      };

    default:
      return { ...state };
  }
};
export default cardsReducer;
