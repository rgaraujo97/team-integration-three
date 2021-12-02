import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const status = useSelector((state) => state.status);

  const error = useSelector((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin(username, password));
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
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-form"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="User"
                  autoComplete="off"
                />
              </div>

              <div className="wrap-input">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-form"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="container-login-button">
              <div className="loginLoader">
                {status === "pending" ? <div class="loader"></div> : null}
                <input type="submit" className="login-btn" value="LOGIN" />
              </div>
              </div>
            </form>

            {status === "error" ? (
              <div className= "errorCase">
                <p className="left">Ops!</p>
                <p className="errorWarning">{Object.values(error)}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
