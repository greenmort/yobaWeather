import { FETCH_WEATHER, DELETE_CITY } from '../actions/index';

export default function WeatherReducer(state = [], action) {
    let err = false;
  switch (action.type) {
    case FETCH_WEATHER:
      state.forEach((item)=> {if (item.city.id === action.payload.data.city.id) err=true});
      if(err) return state;
      return [action.payload.data, ...state];
    case DELETE_CITY: {
      let ind = state.length;
      state.forEach((item, i) => {
        if (item.city.id === action.payload) ind = i;
      });
      return [...state.slice(0, ind), ...state.slice(ind + 1)];
    }
    default:
      return state;
  }
}
