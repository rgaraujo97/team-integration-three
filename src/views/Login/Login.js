import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginAction } from '../../store';

const Login = () => {

  // const status = useSelector(state => state.Auth.status)

  // const error = useSelector(state => state.Auth.error)

  const[log,setLog]=useState(false);

  const[user,setUser]=useState();
  const[password,setPassword]=useState();

  const dispatch = useDispatch(); 

  function handleChangeUser(e){
    setUser(e.target.value)
  }

  function handleChangePassword(e){
    setPassword(e.target.value)
  }

  function handleSubmit(e){
    
    setLog(true)
    dispatch(loginAction({user,password},dispatch))

  }

  return (
   <div className="">
    <div>
      <input type="text" placeholder="user" onChange={handleChangeUser}/>
      <input type="password" placeholder="password" onChange={handleChangePassword}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
     
   </div>
  );
}

export default Login;
