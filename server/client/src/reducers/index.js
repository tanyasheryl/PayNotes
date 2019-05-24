import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import loginReducer from './loginReducer';
import notesReducer from './notesReducer';
export default combineReducers({
  auth: loginReducer,
  form: reduxForm,
  notes: notesReducer
});
