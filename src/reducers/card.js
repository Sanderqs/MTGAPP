const initialState = {
  cards: 0,
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LAND":
      const { card, value } = action.payload;
      return { ...state, [card]: value };
    case "SET_LAND":
      return { ...state };
    default:
      return state;
  }
}
export const updateLand = (card, value) => {
  console.log(card);
  return { type: "CHANGE_LAND", payload: { card, value } };
};
export const setLand = (totalCards) => {
  return { type: "SET_LAND", payload: totalCards };
};
