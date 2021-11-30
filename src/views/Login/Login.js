import React, {useState} from 'react';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    
  }

  return (
    <div>
      <form type='submit'>
        <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button onClick={handleSubmit}>Login</button>
      </form>
   </div>
  );
}

export default Login;
