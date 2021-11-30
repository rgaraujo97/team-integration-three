import React, { useState } from 'react';
import "./login.css";
import {useDispatch, useSelector } from 'react-redux';
import {authLogin} from '../../store/index';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const status = useSelector( state => state.status);
  console.log(status);

  const error = useSelector(state => state.error);

  const handleSubmit= (e) => {
    e.preventDefault();
    dispatch(authLogin({user: username, password: password}))
    console.log(dispatch);
    //return login();
  }

  

  return (
   <div>
     <div className="container">
       <div className="container-login">
         <div className="wrap-login">
           <form className="login-form" onSubmit= {handleSubmit}>
             

             <div className="wrap-input">
               <input
               onChange={(e) => setUsername(e.target.value)}
               className="input-form"
               type="text"
               name="username"
               id="username"
               placeholder="User"
               autoComplete="off"
               />
             </div>

             <div className="wrap-input">
               <input
               onChange={(e) => setPassword(e.target.value)}
               className="input-form"
               type="password"
               name="password"
               placeholder="Password"
               />
             </div>

             <div className="container-login-button">
               <input type="submit" className="login-btn" value= "LOGIN"/>
             </div>
           </form>

           {status === 'pending' ? 
           (<p className="loading">loading </p>) : (null)}
            
           {error != null? 
           (<p className="loading">{Object.values(error)}</p>)
            : (null)}
            
            
         </div>
       </div>
     </div>
   </div>
  );
  
}

export default Login;