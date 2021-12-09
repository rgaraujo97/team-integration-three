import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/Auth/loginReducer";
import { TextField } from "@material-ui/core";
import { Navigate } from 'react-router';

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const status = useSelector((state) => state.Auth.status);

  const error = useSelector((state) => state.Auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    dispatch(authLogin({user, password}));
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
              name="user"
              label="user"
              type="text"
              id="user"
              onChange={(e) => setUser(e.target.value)}
            />
                {/* <input
                  onChange={(e) => setUser(e.target.value)}
                  className="input-form"
                  type="text"
                  name="user"
                  id="user"
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

            {status === false ? (
              <div className= "errorCase">
                <p className="left">Ops!</p>
                <p className="errorWarning">{Object.values(error)}</p>
              </div>
            ) : null}

            {status === true ? 
           (<Navigate to="/"/>) : (null)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
