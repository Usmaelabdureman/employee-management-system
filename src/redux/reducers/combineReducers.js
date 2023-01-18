import { combineReducers } from 'redux';
import employees from './employees';

const rootReducer = combineReducers({
  employees: employees,
});


export default rootReducer;