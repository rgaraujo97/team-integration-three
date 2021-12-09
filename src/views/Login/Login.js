import React, { useState } from "react";
import "./login.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/index";
import { TextField } from "@material-ui/core";
import { Navigate } from 'react-router';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.login(username, password);
    debugger;
  };

  return (
    <div className="bigOne">
      <div className="greyThing disappear"></div>
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
                {props.status === "pending" ? <div class="loader"></div> : null}
                <p className="loginText">Login</p>
                </button>
              </div>
            </form>

            {props.status === "error" ? (
              <div className= "errorCase">
                <p className="left">Ops!</p>
                <p className="errorWarning">{Object.values(props.error)}</p>
              </div>
            ) : null}

            {props.status === "success" ? 
           (<Navigate to="/"/>) : (null)}
          </div>
        </div>
        <p className="bellow">Rafael Costa - Team Integration</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{status: state.status,
          error: state.error}
};

const mapDispatchToProps = () => dispatch =>{
  return {
    login: (username, password) => {authLogin(username, password)(dispatch)}
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(Login)