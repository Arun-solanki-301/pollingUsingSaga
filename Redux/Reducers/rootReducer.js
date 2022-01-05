import { combineReducers } from "redux";
import LoginReducer from './loginReducer'
import signUpReducer from "./SignUpReducer";
const rootReducer = combineReducers({
    LoginData : LoginReducer,
    SignUpData : signUpReducer
})  
export default rootReducer;