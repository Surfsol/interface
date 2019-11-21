import {FAV_FETCH,FAV_SUCCESS,FAV_FAILURE} from '../actions/redActions'

const initialState = {
    favs : [],
    isFetching: false,
    error: ''
}

const redReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAV_FETCH:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case FAV_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: '',
            favs: action.payload
          };
        case RED_FAILURE:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }
    };
 
export default redReducer;