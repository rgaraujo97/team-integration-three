import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import login from '../../store/Auth/actions';
import { requestLogin } from '../../store/Auth/actions';
import './Login.css';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  
  const loggedIn = useSelector(state => state.login.logStatus);

  const status = useSelector( state => state.login.logStatus);

  const error = useSelector(state => state.login.error);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(requestLogin({ email, password }));
    console.log(requestLogin());
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
              required />
            
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
          </div>
            <button type='submit'>Login</button>
            <div className='loader'></div>
        </form>
      </div>
    </div>
  );
}

export default Login;
