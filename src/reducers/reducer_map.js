import { OPEN_MAP, CLOSE_MAP } from '../actions/index';

const initialState = {
  isSelected: false,
  coord: {
    lat: 51.4821,
    lng: -0.0046
  },
    zoom: 1
};

export default function MapReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MAP:
      return {
        isSelected: true,
        coord: {
          lat: action.payload.lat,
          lng: action.payload.lon
        },
          zoom: 12
      };
      case CLOSE_MAP:
        return initialState;
    default:
      return state;
  }
}
