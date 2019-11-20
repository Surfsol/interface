import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import redReducer from './redReducer'

export default combineReducers ({
  loginReducer,
  redReducer
})
