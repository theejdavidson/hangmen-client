export default function loginReducer(state=null, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return action.user
        case 'CURRENT_USER':
            return action.userObj
        case 'LOGOUT':
            return null
        default:
            return state;
    }
}