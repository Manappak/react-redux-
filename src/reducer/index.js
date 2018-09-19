import { combineReducers } from 'redux'
import counter from './counter'
import mycomp from './mycomp'

export default combineReducers({
  counter,
  mycomp
})