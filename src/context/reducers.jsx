

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        opencart: action.payload,
      };
    default:
      return state;
  }
};
