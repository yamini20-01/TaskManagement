import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials);

    try {
      const response = await axios.post('http://localhost:8080/api/login', null, {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.status === 200) {
        localStorage.setItem('token',encodedCredentials);
        navigate('/dashboard');
      } else {
        alert('Invalid username or password.');
      }
    } catch (error) {
      // Handle login failure
      alert('Invalid username or password.');
    }
  };
  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    
    <div className="login-container">
    <div className="login-wrapper">
        
          <h2 style={{color:'#fff'}}>Login</h2>
          <form>
            <div className="mb-3">
            <div className="form-group">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
            <div className="form-group">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /></div>
            </div>
            <button
              type="button"
              className="btn btn-login w-100 mt-3"
              onClick={handleLogin}>Login</button>
            </div>
            <div className="register-link">
          <p style={{color:'white'}}>New user? <button className="btn btn-link" onClick={handleRegisterRedirect}>Register</button></p>
        </div>
          </form>
        </div>
      </div>
    
  );
};

export default LoginPage;
