const initialState = {
  land: 17,
  nonland: 23,
  total: 0,
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
      const { type, numberOfCards } = action.payload;
      console.log(type);
      return { ...state, [type]: numberOfCards };

    case "TOTAL_CHANGE":
      return { ...state, total: state.land + state.nonland };
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
