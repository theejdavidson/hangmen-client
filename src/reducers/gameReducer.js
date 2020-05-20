const initialGameState = {
        inviteKey: '',
        guessWord: '',
        gameState: null
}

export default function gameReducer(state=initialGameState, action) {
    switch(action.type) {
        case 'SET_INVITE_KEY':
            return {...state, inviteKey: action.inviteKey }
        case 'SET_GUESS_WORD':
            return {...state, guessWord: action.guessWord }
        case 'SET_GAME_STATE':
            return {...state, gameState: action.gameState}
        default:
            return {...state};
    }
}