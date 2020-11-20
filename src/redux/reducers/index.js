import {combineReducers} from 'redux'
import AuthReducers from './AuthReducers'

export default combineReducers({
    Auth: AuthReducers
})