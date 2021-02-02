const initialState = {
  black: 0,
  blue: 0,
  green: 0,
  red: 0,
  white: 0,
  colorless: 0,
};
export default function devotionReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      const { type, numberOfCards } = action.payload;
      console.log(type);
      return { ...state, [type]: numberOfCards };
    default:
      return state;
  }
}

export const updateDevotion = (type, numberOfCards) => {
  return { type: "INPUT_CHANGE", payload: { type, numberOfCards } };
};
