import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSignup = () => {
    // Your signup logic goes here
    // For simplicity, let's assume a simple check for demo purposes
    if (password === confirmPassword) {
      // Successful signup
      setShowAlert(false);
      alert('Signup successful!');
    } else {
      // Failed signup
      setShowAlert(true);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {showAlert && <div className="alert">Passwords do not match</div>}
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button onClick={()=>navigate('/')}>Signup</button>
    </div>
  );
};

export default Signup;
