export default (state, action) => {
    if (action.type === "addTab") {
      return {
        ...state,
        [action.tab]: {
          tab: action.tab,
          scrollPosition: action.scrollPosition,
          page: action.page
        }
      };
    } else if (action.type === "inputUserBarcode") {
      return { ...state, userBarCode: action.userBarCode };
    }
    return state;
  };
  