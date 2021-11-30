import React, {useState} from 'react';
import './Login.css';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input className='input-1' type='text' placeholder='Username' name='username' value={username} onChange={(event) => setUsername(event.target.value)} />
        <input className='input-2' type='password' placeholder='Password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className='login-btn' onClick={handleSubmit}>Login</button>
        <div className='loader'></div>
      </form>
   </div>
  );
}

export default Login;
