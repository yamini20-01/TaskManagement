import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Register.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/dashboard');
  };


  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/register', { 
        username,
        password,
        email
      });

      if (response.status === 201) { 
        alert('User registered successfully.');
        navigate('/login');
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      alert('Registration failed.');
    }
  };

  return (
    <div className="register-container">
  <div className="register-wrapper">
    <h2 style={{color:'#fff'}}>Register</h2>
    <form>
      <div className="form-group">
        <input
          type="text"
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div classname="register-button">
      <button 
        type="button" 
        className="btn btn-register" 
        onClick={handleRegister}
      >
        Register
      </button>
      </div>
      <div className="login-link">
          <p style={{color:'#fff'}}>Already registered? <button className="btn btn-link" onClick={handleLoginRedirect}>Login</button></p>
        </div>
    </form>
  </div>
</div>
  );
};

export default RegisterPage;
