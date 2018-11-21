import { PUSH_FOO } from './actionType';

function reducer(state = { foo: '' }, action) {
  switch (action.type) {
    case PUSH_FOO:
      return { ...state, foo: action.payload };
    default:
      return state;
  }
}

export default reducer;
