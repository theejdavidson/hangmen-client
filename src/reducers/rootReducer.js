import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
    loggedInUser: loginReducer,
    game: gameReducer,
})

export default rootReducer