import {
  SET_RESULT,
} from "./../actions/store";

export const initialState = {
  result: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESULT:
      return { ...state, result: action.result };
    default:
      return state;
  }
}
