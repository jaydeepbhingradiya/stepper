import produce from "immer";

import { createStore } from "redux";
let initialState = {
  person: [],
  selectedPerson: {},
};
const formDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON": {
      const newSate = produce(state, (draft) => {
        draft.person.push(action.payload);
      });
      return newSate;
    }

    case "REMOVE_PERSON": {
      const newState = produce(state, (draft) => {
        const index = draft.person.findIndex(
          (item) => item.id === action.payload
        );
        draft.person.splice(index, 1);
      });
      return newState;
    }

    case "SELECTED_PERSON": {
      const newData = produce(state, (draft) => {
        // draft.selectedPerson[action.payload.name] = action.payload.value;
        draft.selectedPerson = action.payload;
      });

      return newData;
    }

    case "UPDATE_PERSON": {
      const newState = produce(state, (draft) => {
        let index = draft.person.findIndex(
          (index) => index.id === action.payload.id
        );
        if (index < 0) index = 0;
        draft.person[index] = draft.selectedPerson;
      });
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(
  formDetailReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
