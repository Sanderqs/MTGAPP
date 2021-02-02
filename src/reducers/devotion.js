const initialState = {
  blackMana: 0,
  blueMana: 0,
  greenMana: 0,
  redMana: 0,
  whiteMana: 0,
  colorlessMana: 0,
};

export default function devotionReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
