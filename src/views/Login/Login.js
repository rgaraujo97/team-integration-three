import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/auth/auth';
import { requestReducer } from '../../store/auth/auth';
import './Login.css';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loggedIn = useSelector(state => state.login.isLoggedIn);
  console.log(loggedIn);
  const status = useSelector(state => state.login.logStatus);
  console.log(status);
  const error = useSelector(state => state.login.error);
  console.log(error);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(requestReducer({ user:email, password }));
   console.log(requestReducer());
  }

  return (
    <div className='main-container'>
      <div className='rectangule-1'></div>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='inputs'>
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              className='input-1'
              type='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              />
            
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className='input-2'
              type='password'
              name='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required />
             
            {/* {error && error !== 'null' ?
              <div >
                <p className='error-message'>Ops!</p>
                <p className='error'>aahahhaaaaaha{ error }</p>
              </div>
              
              : <p>Ops</p> }
             */}
          </div>
          
         
          <button type='submit'>
            {/* {status === "IDLE" && 
             <CircularProgress className='loader'/>
           } */}
            Login</button>
         
        </form>
        
      </div>
    </div>
  );
}

export default Login;
