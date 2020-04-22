import shopActionTypes from "./shopTypes";

export const updateCollections = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
