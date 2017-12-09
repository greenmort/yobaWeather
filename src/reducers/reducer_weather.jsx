import {FETCH_WEATHER, DELETE_CITY, HANDLE_XHR_ERROR} from '../actions/index';

export default function (state = [], action) {
    let param = action.type;
    if(action.error) param = HANDLE_XHR_ERROR;
    switch (param){
        case FETCH_WEATHER:{
            console.log(action.payload.status);
            return [action.payload.data, ...state];
        }
        case DELETE_CITY:{
            let ind = state.length;
            state.forEach((item, i)=>{
                if(item.city.id === action.payload) ind = i;
            });
            return [...state.slice(0,ind), ...state.slice(ind+1)]
        }
        case HANDLE_XHR_ERROR:{
            alert('City not found!');
            return state;
        }
        default:
            return state;
    }
}