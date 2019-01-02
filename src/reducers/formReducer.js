import { DATA_GET, DATA_SAVE } from '../actions/formAcions.js';

const INITIAL_STATE = {
  dataload: null,
  loaded: null,
};

export default function (state = INITIAL_STATE, { type, dataload }) {
  switch (type) {
    case DATA_GET:
      return {
        ...state,
        dataload: ["Some", "data"]/*dataload.data*/,
        loaded: true,
      };

    case DATA_SAVE:
      return {
        ...state,
        dataload: dataload,
        loaded: false,
      };

    default:
      return state;
  }
}