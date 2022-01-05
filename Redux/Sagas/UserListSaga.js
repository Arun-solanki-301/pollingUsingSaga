import { put, call } from "@redux-saga/core/effects";
import { userListSuccess , userListError } from "../Actions/actions";
import axios from "axios";

export function* UserList(action) {
  const url = "https://secure-refuge-14993.herokuapp.com/list_users"
  const apiCall = () => {
    return axios.get(url)
  }
  try {
    const response = yield call(axios.get, url);
    if (response) {
      console.log(response)
      yield put(userListSuccess({ response: response }));
    } else {
      yield put(userListError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(userListError({ error: error }));
  }
} 
