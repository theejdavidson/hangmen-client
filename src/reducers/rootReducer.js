import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
    loggedInUser: loginReducer,
    gameReducer: gameReducer,
})

export default rootReducer