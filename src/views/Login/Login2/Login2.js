import { React, useState} from 'react';
import { Button, TextField } from '@mui/material';
//import styles from './Login.module.css';
import { useSelector, useDispatch } from 'react-redux'

import { login } from '../../../store/auth';
import '../Login.css';
//import {login} from '../../../App2/main/user/userActions'

const Login2 = () => {

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
    <div  className="container-flex row"   >
      <div  className="container-flex column grey display-only"  >
      
      </div>
    <div className="container-flex column"  maxWidth="sm">
      <form  className="form-group--container formCenter" component="form"  noValidate   autoComplete="off" >
         

{/*  */}
            <TextField
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
                <Button className="" variant="contained" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
         
          
       
             



           
          
        </form>
        {status === 'error' && 
              <div /*className={styles.lg_Messages}*/>
              <div /*className={styles.lg_MessagesDetail}*/> <b>Oops!</b> </div>  <div /*className={styles.lg_MessagesDetail}*/>{error.user}{error.password}</div>
              </div> 
            }
          {status==='success' && 
            <div /*className={styles.lg_Messages}*/>
              {status}
            </div>
          }
        <footer /*className={styles.lg_bottomContainer}*/>Igor Ponte - Team Integration</footer>
      </div> 
    </div>  
      

  );
}

export default Login2;
