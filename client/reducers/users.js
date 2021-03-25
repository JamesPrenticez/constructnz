import { GET_USER_SUCCESS, SET_USER } from '../actions/users'

export default function usersReducer (state = {
  id: 1,
  username: 'test1',
  firstName: 'best',
  lastName: 'test',
  email: 'best@test.com',
  phoneNumber: '123-4567',
  imageUrl: 'test-image.jpg',
  location: 'fairyland'}, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.details
    case SET_USER:
      return action.user
    default:
      return state
  }
}

