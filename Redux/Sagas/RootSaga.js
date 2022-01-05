import * as action from '../Constants'
import { fork, all, takeLatest } from "redux-saga/effects";
import { login } from './loginSaga';
import { Signup } from './signUpSaga';
import { UserList } from './UserListSaga';


function* LoginSaga() {
  yield takeLatest(action.LOGIN_REQUEST, login);
}
function* signUpSaga() {
  yield takeLatest(action.SIGNUP_REQUEST, Signup);
}
function* userTistSaga() {
  yield takeLatest(action.USER_LIST_REQUEST, UserList);
}
export default function* rootSaga() {
  yield all([fork(LoginSaga) , fork(signUpSaga), fork(userTistSaga)]);
}
