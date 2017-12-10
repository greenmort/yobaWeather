import { HANDLE_XHR_ERROR } from '../actions/index';

export default function ErrorReducer(state = [], action) {
  switch (action.type) {
    case HANDLE_XHR_ERROR:{
        console.log(state);
        return [action.payload, ...state];
    }
    default:
      return state;
  }
}
