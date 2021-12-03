import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {auth} from "./Auth/loginReducer"
// import { configureStore } from '@reduxjs/toolkit';
// import { createAsyncThunk } from "@reduxjs/toolkit"

export const authLogin = (user, password) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUESTED" });
  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, password }),
  }).then(async (res) => {
    const response = await res.json();

    if (!res.ok) {
      dispatch({ type: "LOGIN_FAILED", data: response });
    } else {
      dispatch({ type: "LOGIN_SUCCESS", data: response });
      window.localStorage.setItem("token", response.bearer_token);
    }
  });
};

const composedEnchancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(auth, composedEnchancer);

