import {combineReducers} from 'redux';
import {addContactReducer, getContactReducer} from './contact';
import {globalReducer} from './global';

const reducer = combineReducers({
  addContactReducer,
  globalReducer,
  getContactReducer,
});

export default reducer;
