import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    // Your authentication logic goes here
    // For simplicity, let's assume a simple check for demo purposes
    if (username === 'demo' && password === 'password') {
      // Successful login
      setShowAlert(false);
      alert('Login successful!');
    } else {
      // Failed login
      setShowAlert(true);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {showAlert && <div className="alert">Invalid username or password</div>}
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={()=> navigate('/home')}>
        Login
        </button>
      <h5>OR</h5>
      <button onClick={()=>navigate('/sign')}>
        Signup
        </button>
    </div>
  );
};

export default Login;
