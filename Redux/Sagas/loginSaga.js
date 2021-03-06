import { put, call } from "@redux-saga/core/effects";
import { loginSuccess , loginError } from "../Actions/actions";
import axios from "axios";

export function* login(action) {
  console.log(action)
  const url = `https://secure-refuge-14993.herokuapp.com/login?username=${action.payload.name}&password=${action.payload.password}`
  const apiCall = () => {
    return axios.post(url)
  }
  try {
    const response = yield call(axios.post, url);
    if (response) {
      console.log(response)
      yield put(loginSuccess({ response: response }));
    } else {
      yield put(loginError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(loginError({ error: error }));
  }
} 
