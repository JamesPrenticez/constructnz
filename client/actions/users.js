import { showError } from './error'
import * as api from '../api/users'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const GET_USER_PENDING = 'GET_USER_PENDING'
export const FETCH_USER = 'FETCH_USER'
export const SET_USER = 'SET_USER'

export function setUser(user) {
  return ({
      type: SET_USER,
      user
  })
}

export function fetchUser (user){
  return {
      type: FETCH_USER,
      user
  }
}

export function getUserSuccess (details) {
  return {
    type: GET_USER_SUCCESS,
    details
  }
}

export function getUserPending () {
  return {
    type: GET_USER_PENDING
  }
}

export function getUserDetails () {
  return dispatch => {
    dispatch(getUserPending())
    return api.getUserDetails()
      .then(details => {
        dispatch(getUserSuccess(details))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}

export function userPending () {
  return {
    type: LOGIN_PENDING
  }
}

export function userSuccess () {
  return {
    type: LOGIN_SUCCESS
  }
}
