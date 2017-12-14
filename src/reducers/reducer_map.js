import { OPEN_MAP } from '../actions/index';

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
    default:
      return state;
  }
}
