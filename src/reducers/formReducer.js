import { DATA_SAVE } from '../actions/formAcions.js';

const INITIAL_STATE = {
  dataload: [],
};

export default function (state = INITIAL_STATE, { type, dataload }) {
  switch (type) {

    case DATA_SAVE:
      return {
        ...state,
        dataload: [...state.dataload, dataload.data],
      };

    default:
      return state;
  }
}