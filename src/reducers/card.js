const initialState = {
  cards: 1,
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LAND":
      const { card, value } = action.payload;
      return { ...state, [card]: value };
    default:
      return state;
  }
}
export const updateLand = (card, value) => {
  console.log(card);
  return { type: "CHANGE_LAND", payload: { card, value } };
};
