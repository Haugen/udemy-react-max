export const updateObject = (state, newValues) => {
  return {
    ...state,
    ...newValues
  };
};
