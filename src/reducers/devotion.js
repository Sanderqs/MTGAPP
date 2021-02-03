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
    case "DEVOTION_CHANGE":
      const { color, totalDevotion } = action.payload;
      console.log(color, totalDevotion);
      return { ...state, [color]: totalDevotion };
    default:
      return state;
  }
}

export const updateDevotion = (color, totalDevotion) => {
  return { type: "DEVOTION_CHANGE", payload: { color, totalDevotion } };
};
