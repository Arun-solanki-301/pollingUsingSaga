import { put, call } from "@redux-saga/core/effects";
import { signUpSuccess , signUpError } from "../Actions/actions";
import axios from "axios";

export function* Signup(action) {
  console.log(action)
  const url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${action.payload.name}&password=${action.payload.password}&role=${action.payload.name}`
  const apiCall = () => {
    return axios.post(url)
  }
  try {
    const response = yield call(axios.post, url);
    if (response) {
      console.log(response)
      yield put(signUpSuccess({ response: response }));
    } else {
      yield put(signUpError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(signUpError({ error: error }));
  }
} 
