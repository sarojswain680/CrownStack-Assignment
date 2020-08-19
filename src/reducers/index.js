import {combineReducers} from 'redux';
import audioListReducer from './audioList.reducer';
const rootReducer = combineReducers({
  audioListReducer,
});
export default rootReducer;
