import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import general from './generalReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  general
});

export default rootReducer;
