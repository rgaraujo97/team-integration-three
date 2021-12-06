import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch} from 'react-redux';
import { requestLogin } from '../../store/Auth/actions';
import './Login.css';
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import login from '../../store/Auth/actions';

const Login = (props) => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  //const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login( user, password );
    
  }

  return (
    <div className='main-container'>
      <div className='rectangule-1'></div>
      <div className='container'>
       
        <form className='form' onSubmit={handleSubmit}>
          <div className='inputs'>
            
            <TextField
              error={props.error && props.error.user}
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              className='input-1'
              type='email'
              name='email'
              value={user}
              onChange={(event) => setUser(event.target.value)}
              required
              />
            
            <TextField
              error={props.error && props.error.password}
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
          
            {props.status === "pending" ?
              <div className='loader'> </div>
            :
                null}

           <button type='submit' className='login'>Login</button>
          {props.error && props.error.user || props.error.password }
         
        </form>      
      </div>
      </div>
  );
}

//TO CONNECT OUR STORE TO MY COMPONENT LOGIN
function mapStateToProps(state) {

  return {
    error: state.login.error,
    status: state.login.logStatus,
    
  };
 
}

  function mapDispatchToProps(dispatch) {
    return {
      login (user, password) {
        const actions = requestLogin({ user, password })
        dispatch(actions);
     }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);

//export default Login;
  
