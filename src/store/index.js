import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { PlaylistAddOutlined } from "@mui/icons-material";
import { GET_PASSWORD, GET_USER } from "../views/App/actions";

const SUCCESS = "success";
const IDLE = "idle",
  LOADING = "pending",
  ERROR = "error";

const initialState = {
  auth: {
    status: IDLE,
    error: {},
  },
  user: {
    user: "",
    password: "",
  },
};

export const loginAction = ({user,password}) => async dispatch => {
  
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
      //  debugger

      dispatch({ type: "LOGIN_FAILED", data: response });
    } else {
      dispatch({ type: "LOGIN_SUCEEDED", data: response });
      window.localStorage.setItem("token", response.bearer_token);
    }
  });
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return {        
        auth: {
          status: LOADING,
          error: {},
        },
      };
    case "LOGIN_SUCEEDED":
      return {   
        auth: {
          status: SUCCESS,
          error: {},
        },
      };
    case "LOGIN_FAILED":
      return {        
        auth: {
          status: ERROR,
          error: action.data,
        },
      };  
     
    default:
      return state;
  }
}

export const store = createStore(Auth);

// export const store = configureStore({
//   reducer: {},
// });
