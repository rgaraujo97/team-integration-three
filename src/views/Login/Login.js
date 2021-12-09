import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { requestReducer } from '../../store/auth/reducer';
import { useSelector, useDispatch } from 'react-redux';
import './Login.css';
import CircularProgress from '@mui/material/CircularProgress';
import login from '../../store/auth/reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Login = (props) => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  console.log(props.error);

  const handleSubmit = (event) => {
    event.preventDefault();
   props.requestReducer( {user, password} );
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
              error={props.error && props.error.password }
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
          <div>
            <button type='submit' className='login'>
              {props.status === "pending" ?
              <div className='loader'> </div>
            :
                null}
              Login</button>
          </div>
         
        </form>
     {props.error && props.error.password ? <div className='error-user'><p className='error-text-1'>Ops! </p><p className='error-text-2'> { props.error.password }</p></div> : <div></div>}
     {props.error && props.error.user ? <div className='error-user'><p className='error-text-1'>Ops! </p><p className='error-text-2'>{ props.error.user }</p></div> : " "}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  error: state.login.error,
  status: state.login.logStatus,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestReducer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Login);