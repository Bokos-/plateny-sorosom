import { TYPE_SET_CONTEXT_REF } from "../constants/canvasConstants";

const initState = {
  context: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case TYPE_SET_CONTEXT_REF:
      return { ...state, context: action.context };
    default:
      return state;
  }
};
