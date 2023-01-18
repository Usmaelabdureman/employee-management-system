import { createStore } from 'redux'
import rootReducer from './reducers/combineReducers';
const reducerFn = (state={counter:0},action)=>{

    return state;
}
const store = (reducerFn);

export default store;