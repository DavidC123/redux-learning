import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combinedReducers, combineReducers} from 'redux'; //combinedReducers used for combining counter and isLogged reducers

const allReducers = combineReducers({
    counter: counterReducer,  //or just 'counterReducer: counterReducer'
    isLogged: loggedReducer
})
export default allReducers;