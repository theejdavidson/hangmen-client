import { API_ROOT, API_WS_ROOT, HEADERS } from '../constants/index'

export const loginSuccess = user => {
    return {
      type: 'LOGIN_SUCCESS',
      user: user
    }
}

export const fetchCurrentUser = () => {
    return (dispatch => {
    fetch(`${API_ROOT}/api/v1/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(resp => resp.json())
      .then(userObj => {
          dispatch({ type: 'CURRENT_USER', userObj})
      })
    })
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

  export const addedUser = user => {
      return {
          type: 'ADDED_USER',
          user: user
      }
  }

// export const createGame = () => {
//     return (dispatch => {
//         fetch(`${API_ROOT}/api/v1/games`, {
//             method: 'POST',
//             headers: HEADERS,
//             body: JSON.stringify()
//         })
//     })
// }