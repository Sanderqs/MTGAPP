const initialState = {
  playerOne: 20,
  playerTwo: 18,
  slayerThree: 10,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "LIFE_CHANGE":
      const { player, totalPlayerLife } = action.payload;
      console.log(player, totalPlayerLife);
      return { ...state, [player]: totalPlayerLife };
    default:
      return state;
  }
}

export const updateTotalLife = (player, totalPlayerLife) => {
  return { type: "LIFE_CHANGE", payload: { player, totalPlayerLife } };
};
