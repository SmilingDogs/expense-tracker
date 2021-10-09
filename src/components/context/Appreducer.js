export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return { transactions: state.transactions.filter((t) => t.id !== action.payload)};

    case "ADD_TRANSACTION":
      return { transactions: [action.payload, ...state.transactions]};

      default:
      return state;
  }
};
