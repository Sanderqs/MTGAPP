const initialState = {
  land: 17,
  nonland: 23,
  // total: 40,
};

export default function landReducer(state = initialState, action) {
  switch (action.type) {
    case "DRAFT":
      return { ...state, land: 17, nonland: 23, total: 40 };

    case "STANDARD":
      return { ...state, land: 23, nonland: 37, total: 60 };
    case "EDH":
      return { ...state, land: 44, nonland: 55, total: 99 };
    case "INPUT_CHANGE":
      const { type, numberOfCards } = action.payload;
      return { ...state, [type]: numberOfCards };
    case "TOTAL_CHANGE": {
      const total = action.payload;
      return { ...state, land: total - state.nonland };
    }
    default:
      return state;
  }
}
export const setDraft = (land, nonland) => {
  return { type: "DRAFT", payload: { land, nonland } };
};
export const setStandard = (land, nonland) => {
  return { type: "STANDARD", payload: { land, nonland } };
};
export const setEdh = (land, nonland) => {
  return { type: "EDH", payload: { land, nonland } };
};
export const updateCard = (type, numberOfCards) => {
  return { type: "INPUT_CHANGE", payload: { type, numberOfCards } };
};

export const updateTotal = (numberOfCards) => {
  return { type: "TOTAL_CHANGE", payload: numberOfCards };
};
