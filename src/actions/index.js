import { API_ROOT, HEADERS } from '../constants/index'

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
        headers: HEADERS
      })
      .then(resp => resp.json())
      .then(userObj => {
        if(userObj.message) {
            return null
        } else {
            dispatch({ type: 'CURRENT_USER', userObj})
        }
      })
    })
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

  export const setInviteKey = inviteKey => {
    localStorage.setItem('inviteKey', inviteKey)
      return {
          type: 'SET_INVITE_KEY',
          inviteKey: inviteKey
      }
  }

  export const setGuessWord = guessWord => {
      return {
          type: 'SET_GUESS_WORD',
          guessWord: guessWord
      }
  }

  export const setGameState = gameState => {
      return {
          type: 'SET_GAME_STATE',
          gameState: gameState.game
      }
  }

  export const clearGameState = () => {
      console.log('CLEARING GAME STATE')
    return {
        type: 'SET_GAME_STATE',
        gameState: null
    }
}