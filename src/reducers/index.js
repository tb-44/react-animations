import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import genral from './generalReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  genral
});

export default rootReducer;
