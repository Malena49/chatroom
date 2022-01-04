import {combineReducers} from'redux';
import messageReducer from './messageReducer'
import SettingsReducer from './SettingsReducer'
const allReducers = combineReducers({
   message: messageReducer,
   etat: SettingsReducer
})
export default allReducers;