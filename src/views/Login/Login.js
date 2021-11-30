import { React, useState} from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import styles from './Login.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/auth';


<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"></link>

const Login = () => {

  const [user, setUser] = useState("");
  const[password, setPassword] = useState("");
    
  const dispatch = useDispatch();
  const status = useSelector( state => state.Auth.status );
  const error = useSelector( state => state.Auth.error );
  
  function handleLogin(){
    dispatch(login({user, password}))    
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
                    Login
                  </Button>
                </div>
          </div>
          
       
             



           
          
        </Box>
        {status === 'error' && 
              <div className={styles.lg_Messages}>
                {error.user}{error.password}
              </div> 
            }
          {status==='success' && 
            <div className={styles.lg_Messages}>
              {status}
            </div>
          }
        <footer className={styles.lg_bottomContainer}>Igor Ponte - Team Integration</footer>
      </Container> 
      
      
    </>
  );
}

export default Login;
