import produce from 'immer';

const defaultState = {};

const appReducer = produce((draft, action) => {
  return draft;
}, defaultState);

export default appReducer;
