import { actionTypes } from "../actionTypes";

const initialState = {
  counter: 0,
  total: 0
};

const counterReduer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1,
        total: state.total + 1
      };
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1,
        total: state.total + 1
      };
    default:
      return { ...state };
  }
};

export default counterReduer;
