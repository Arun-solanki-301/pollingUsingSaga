import { combineReducers } from "redux";
import LoginReducer from './loginReducer'
import signUpReducer from "./SignUpReducer";
import UserListReducer from "./userListReducer";
const rootReducer = combineReducers({
    LoginData : LoginReducer,
    SignUpData : signUpReducer,
    UserListData : UserListReducer
})  
export default rootReducer;