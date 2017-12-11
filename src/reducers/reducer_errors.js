import { SHOW_ALERT, HIDE_ALERT } from '../actions/index';

const initialState = {
  isError: false,
  errorData: null
};

export default function ErrorReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT: {
      return {
        isError: true,
        errorData: action.payload
      };
    }
    case HIDE_ALERT: {
      return initialState;
    }
    default:
      return state;
  }
}
