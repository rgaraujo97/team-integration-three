import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/index";
import { TextField } from "@material-ui/core";
import { Navigate } from 'react-router';

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const email = "@";
  const[valid, setvalid] = useState(true);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.status);
  console.log(status);

  const error = useSelector((state) => state.error);
  console.log(error);
  let cliked = false;
  console.log(cliked);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin(user, password));
    {if(user.indexOf('@')>=0){
      setvalid(true);
    } else
    setvalid(false);
    }
    //return login();
  };

  return (
    <div className="bigOne">
      <div className="greyThing disappear"></div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="wrap-input">
              
            {valid ? <TextField
              className="input-form"
              margin="normal"
              fullWidth
              name="user"
              label="user"
              type="text"
              id="user"
              onChange={(e) => setUser(e.target.value)}
        />: <TextField
              className="input-form"
              margin="normal"
              fullWidth
              name="user"
              label="user"
              type="text"
              id="user"
              error
              helperText="Invalid email"
              onChange={(e) => setUser(e.target.value)}
            />}
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
