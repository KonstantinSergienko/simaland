const initialState = {
  pics: [],
};

export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PICTURES":
      return { ...state, pics: action.payload };
    default:
      return state;
  }
};
