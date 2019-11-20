import { RED_FETCH, RED_SUCCESS, RED_FAILURE} from '../actions/redActions'

const initialState = {
    red : [],
    isFetching: false,
    error: ''
}

const redReducer = (state = initialState, action) => {
    switch (action.type) {
        case RED_FETCH:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case RED_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: '',
            red: action.payload
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