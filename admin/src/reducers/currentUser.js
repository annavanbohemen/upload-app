import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actions/users'
import {localStorageJwtKey} from '../constants'

let initialState = null
try {
  const jwt = localStorage.getItem(localStorageJwtKey)
  const userId = localStorage.getItem('userId')
  console.log('user', userId)
  if (jwt) {
    initialState = { jwt, userId }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, {type, payload}) {
	switch (type) {
    case USER_LOGIN_SUCCESS:
    {
      console.log(payload)
			return payload
    }
    case USER_LOGOUT:
      return null

		default:
      return state
	}
}