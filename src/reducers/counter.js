const initialState = {
  PlayerOne: 20,
  PlayerTwo: 20,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_LIFE":
      return { ...state, PlayerOne: state.PlayerOne + 1 };
    case "DECREMENT_LIFE":
      return { ...state, PlayerOne: state.PlayerOne - 1 };
    case "TOTAL_LIFE":
      return { ...state };
    case "RESET_LIFE":
      return { ...state, PlayerOne: (state.PlayerOne = 20) };
    default:
      return state;
  }
}

export const incrLife = () => {
  return { type: "INCREMENT_LIFE" };
};
export const decrLife = () => {
  return { type: "DECREMENT_LIFE" };
};
export const totalLife = () => {
  return { type: "TOTAL_LIFE" };
};
export const resetLife = () => {
  return { type: "RESET_LIFE" };
};
