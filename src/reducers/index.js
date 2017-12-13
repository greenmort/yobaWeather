import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import ErrorReducer from './reducer_errors';
import MapReducer from './reducer_map';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  errors: ErrorReducer,
  map: MapReducer
});

export default rootReducer;
