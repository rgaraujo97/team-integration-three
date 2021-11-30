import React, { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import "./login.css";
import { Navigate } from 'react-router';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const isloading = false;

  //const dispatch = useDispatch();

  //const loading = useSelector(state => state.auth.isLoading);

  //const status = useSelector( state => state.auth.status );

  //const error = useSelector(state => state.auth.error);

  const handleSubmit= (e) => {
    //e.preventDefault();
    //dispatch(login({user: username, password: password}))
    console.log(5);
  }

  

  return (
   <div>
     <div className="container">
       <div className="container-login">
         <div className="wrap-login">
           <form className="login-form" onSubmit= {handleSubmit}>
             <div className="form-title"> Login </div>

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
           
           {/* {loading ? 
           (<p className="loading">loading </p>) : (null)}

            {status ? 
           (<Navigate to="/"/>) : (null)} */}

            {/* {error != null? 
           (<p className="loading">{Object.values(error)}</p>)
            : (null)} */}
            
            
            
         </div>
       </div>
     </div>
   </div>
  );
  
}

export default Login;
