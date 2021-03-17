import {combineReducers} from 'redux';
import userReducer from './reducers/user/user-reducer';

export default combineReducers({
    user: userReducer
});
