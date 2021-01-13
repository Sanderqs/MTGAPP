const initialState = {
  land: 17,
  nonland: 23,
};

export default function landReducer(state = initialState, action) {
  switch (action.type) {
    case "DRAFT":
      return { ...state, land: 17, nonland: 23 };

    case "STANDARD":
      return { ...state, land: 23, nonland: 37 };
    case "EDH":
      return { ...state, land: 44, nonland: 55 };
    case "INPUT_CHANGE":
      const { card, type } = action.payload;
      return { ...state, [card]: type };

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
export const updateCard = (card, type) => {
  return { type: "INPUT_CHANGE", payload: { card, type } };
};
