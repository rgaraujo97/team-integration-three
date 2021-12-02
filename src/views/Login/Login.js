import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store";
import Footer from "../App/components/Footer";
import styles from "./Login.module.css";

const Login = () => {
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const [log, setLog] = useState(false);

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  function handleChangeUser(e) {
    setUser(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    dispatch(loginAction({ user, password }));
  }

  console.log(status);
  return (
    <div className={styles.lg_mainContainer}>
      <div className={styles.lg_half1}></div>
      <div className={styles.lg_half2}>
        <div className={styles.lg_cardLogin}>
          <div className={styles.lg_inputs}>
            <TextField
              className={styles.lg_input}
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChangeUser}
              autoFocus
            />
            <TextField
              className={styles.lg_input}
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChangePassword}
              autoComplete="current-password"
            />
            <div className={styles.lg_loginButton}>
              <Button
                className={styles.lg_loginBtn}
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                <div className={styles.lg_login}>
                  {status === "pending" ? (
                    <div className={styles.loader}></div>
                  ) : null}
                  {/* <div className={styles.loader}>                
              </div> */}
                  <div className={styles.lg_placeholderLogin}>login</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.lg_errors}>
          {status === "error" ? (
            <p>
              <span>OPS!</span>
              <span className={styles.lg_errorMsgs}>
                {error.user}
                {error.password}
              </span>
            </p>
          ) : null}
        </div>
        <div className={styles.lg_footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
