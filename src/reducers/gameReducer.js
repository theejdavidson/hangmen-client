export default function gameReducer(state=null, action) {
    switch(action.type) {
        case 'ADDED_USER':
            return action.user
        case 'REMOVED_USER':
            return action.user
        default:
            return state;
    }
}