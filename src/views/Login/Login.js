import { React, useState} from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import styles from './Login.module.css';
import { useSelector, useDispatch } from 'react-redux'
//import { login } from '../../store/auth';
//import {Login} from '../'
import {login} from '../../App2/main/user/userActions'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"></link>

const Login = (props) => {

  const [user, setUser] = useState("");
  const[password, setPassword] = useState("");
    
  const dispatch = useDispatch();
  //const status = useSelector( state => state.Auth.status );
  //const error = useSelector( state => state.Auth.error );
  
  function handleLogin(){
    //dispatch(props.login(user, password))    
    props.login(user, password)
  }


  function handleChangeEmail(e){
    setUser(e.target.value)    
  }

  function handleChangePassword(e){
    setPassword(e.target.value)
  }


  return (
    <>
      <Container className={styles.lg_containerDiv} maxWidth="sm">
        <Box className={styles.lg_formLogin}  component="form"  noValidate   autoComplete="off" >
         
          <div className={styles.lg_formInputsDiv}>


{/*  */}
            <TextField
              className={styles.lg_formInputs}
              margin="normal"
              required
              fullWidth
              id="email"  
              label="Email Address"  
              name="email"
              autoComplete="email"
              onChange={handleChangeEmail}

            />
            
            <TextField
              className={styles.lg_formInputs}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChangePassword}
            />
              <div>
             
                <Button className={styles.lg_loginBtn} variant="contained" onClick={handleLogin}>
                   {props.status === 'pending'  && <div className="loader"></div>}  Login
                  </Button>
                </div>
          </div>
          
       
          



           
          
        </Box>
       

        {/* {props.status === 'error' && 
              <div className={styles.lg_Messages}>
              <div className={styles.lg_MessagesDetail}> <b>Oops!</b> </div>  <div className={styles.lg_MessagesDetail}>{error.user}{error.password}</div>
              </div> 
            } */}
            
        {props.status === 'failed'  && 
              <div className={styles.lg_Messages}>
              <div className={styles.lg_MessagesDetail}> <b>Oops!</b> </div>  <div className={styles.lg_MessagesDetail}>{props.error.user}{props.error.password}</div>
              </div> 
            }
          {props.status==='success' && 
            <div className={styles.lg_Messages}>
              {props.status}
            </div>
          }
        <footer className={styles.lg_bottomContainer}>Igor Ponte - Team Integration</footer>
      </Container> 
      {console.log(props.status)}
      
    </>
  );
}


const mapStateToProps = state =>({status:state.auth.status,error: state.auth.error});
const mapDispatchtoProps = dispatch =>bindActionCreators({login}, dispatch);

export default connect (mapStateToProps, mapDispatchtoProps)(Login)

// export default Login;