const initialGameState = {
        inviteKey: '',
        players: [],
}

export default function gameReducer(state=initialGameState, action) {
    switch(action.type) {
        case 'ADDED_PLAYER':
            return state//action.user
        case 'REMOVED_PLAYER':
            return state//action.user
        case 'SET_INVITE_KEY':
            return {...state, inviteKey: action.inviteKey }
        default:
            return state;
    }
}