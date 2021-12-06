import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/index";
import { TextField } from "@material-ui/core";
import { Navigate } from 'react-router';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let userError = null;

  const dispatch = useDispatch();

  const status = useSelector((state) => state.status);

  const error = useSelector((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin(username, password));
    let userError = Object.values(error);
    //return login();
  };

  return (
    <div className="bigOne">
      <div className="greyThing"></div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="wrap-input">
              <TextField
              className="input-form"
              margin="normal"
              fullWidth
              name="username"
              label="username"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
                {/* <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-form"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="User"
                  autoComplete="off"
                /> */}
              </div>

              <TextField
              className="input-form"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

              {/* <div className="wrap-input">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-form"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div> */}

              <div className="container-login-button">
                
                <button type="submit" className="login-btn" value="LOGIN">
                {status === "pending" ? <div class="loader"></div> : null}
                <p className="loginText">Login</p>
                </button>
              </div>
            </form>

            {status === "error" ? (
              <div className= "errorCase">
                <p className="left">Ops!</p>
                <p className="errorWarning">{Object.values(error)}</p>
              </div>
            ) : null}

            {status === "success" ? 
           (<Navigate to="/"/>) : (null)}
          </div>
        </div>
        <p className="bellow">Rafael Costa - Team Integration</p>
      </div>
    </div>
  );
};

export default Login;
