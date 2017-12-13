import { OPEN_MAP } from '../actions/index';

const initialState = {
  isSelect: false,
  coord: {
    lat: 0,
    lng: 0
  }
};

export default function MapReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MAP:
      return {
        isSelect: true,
        coord: {
          lat: action.payload.lat,
          lng: action.payload.lon
        }
      };
    default:
      return state;
  }
}
