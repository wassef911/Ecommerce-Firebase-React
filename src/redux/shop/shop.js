import { SHOP_DATA } from "./shopdateforpreview";
const INITIAL_STATE = {
  collection: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, { type, action }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
