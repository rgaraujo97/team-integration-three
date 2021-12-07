import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../App/components/Footer";
import styles from "./Login.module.css";
import { styled } from "@mui/material/styles";
import { ErrorSharp } from "@mui/icons-material";
import { loginAction } from "../../store";
import { get_password, get_user } from "../App/actions";

import { connect } from 'react-redux';

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  backgroundColor: "#443DF6",
  borderColor: "#443DF6",
});
const Login = (props) => {
  
  const [user, setUser] = useState();
  const [password, setPassword] = useState();


  

  function handleChangeUser(e) {
    setUser(e.target.value)
    
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    props.login({user,password})
  }

  console.log(user)
  
  console.log(password)



  return (
    <div className={styles.lg_mainContainer}>
      <div className={styles.lg_half1}></div>
      <div className={styles.lg_half2}>
        <div className={styles.lg_cardLogin}>
          <div className={styles.lg_inputs}>
            <TextField
              className={styles.lg_input}
              error={props.error.user != null}
              sx={{ width: "20vw" }}
              margin="dense"
              size="small"
              required
              fullWidth
              id="email"
              variant="outlined"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChangeUser}
              autoFocus
            />
            {props.error.user == "This is not a valid email" ? (
              <div className={styles.userError}>
                <span>{props.error.user}</span>
              </div>
            ) : null}
            <TextField
              error={props.error.password != null}
              className={styles.lg_input}
              sx={{ width: "20vw", paddingBottom: "2.12vh" }}
              margin="dense"
              size="small"
              required
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChangePassword}
              autoComplete="current-password"
            />
            <div className={styles.lg_loginButton}>
              <BootstrapButton
                className={styles.lg_loginBtn}
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                <div className={styles.lg_login}>
                  {props.status === "pending" ? (
                    <div className={styles.loader}></div>
                  ) : null}
                
                  <div className={styles.lg_placeholderLogin}>login</div>
                </div>
              </BootstrapButton>
            </div>
          </div>
        </div>

        {props.status === "error" && props.error.user !== "This is not a valid email" ? (
          <div className={styles.lg_errors}>
            <div className={styles.lg_Ops}>
              <span>Ops!</span>
            </div>
            <div className={styles.lg_errorMsgs}>
              <span>
                {props.error.user}
                {props.error.password}
              </span>
            </div>
          </div>
        ) : null}

        <div className={styles.lg_footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
 

  
};

const mapStateToProps = (state) => {  
  return {
    status: state.auth.status,
    error: state.auth.error,    
  }
}


const mapDispatchToProps = () => dispatch => { 
  return{    
    login: ({user, password}) => {
      loginAction({user,password})(dispatch);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps())(Login);
