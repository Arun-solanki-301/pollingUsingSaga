import { createAction } from "redux-actions";
import * as constant from '../Constants'

// login actions .......
export const loginRequest = createAction(constant.LOGIN_REQUEST)
export const loginSuccess = createAction(constant.LOGIN_SUCCESS)
export const loginError = createAction(constant.LOGIN_ERROR)


// signUp actions ......

export const signUpRequest = createAction(constant.SIGNUP_REQUEST)
export const signUpSuccess = createAction(constant.SIGNUP_SUCCESS)
export const signUpError = createAction(constant.SIGNUP_ERROR)
