import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    GET_USER_PENDING,
    GET_USER_SUCCESS
  } from '../actions/users'

  import { ERROR } from '../actions/error'

  export default function pendingReducer (pendingState = false, action) {
    switch (action.type) {
      case LOGIN_PENDING:
      case GET_USER_PENDING:
        return true
  
      case LOGIN_SUCCESS:
      case GET_USER_SUCCESS:
      case ERROR:
        return false
  
      default:
        return pendingState
    }
  }