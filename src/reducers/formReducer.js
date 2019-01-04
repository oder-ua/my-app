import { DATA_SAVE } from '../actions/formAcions.js';

const INITIAL_STATE = {
  dataload: {username: "UserName"},
  loaded: null,
};

export default function (state = INITIAL_STATE, { type, dataload }) {
  switch (type) {

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