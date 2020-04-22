import shopActionTypes from "./shopTypes";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
