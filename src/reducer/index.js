import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import redReducer from './redReducer'
import favReducer from './favReducer'

export default combineReducers ({
  loginReducer,
  redReducer,
  favReducer
})
