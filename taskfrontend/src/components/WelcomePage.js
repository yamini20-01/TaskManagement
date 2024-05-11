import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const backgroundStyle = {
    backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-project-management-banner-delivery-business-image_1091566.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the height of the background to fill the viewport
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Set text color to white for contrast
    textAlign: 'center',
    position: 'relative' // Ensure position relative for absolute positioning of buttons
  };

  const headingStyle = {
    position: 'absolute',
    top: '20px', // Adjust as needed for desired position
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '36px', // Adjust as needed
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: '35%',
    right: '150px', 
    transform: 'translateX(-90%)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display:'flex',
    flexDirection: 'column',
    padding:'60px',
    borderRadius: '20px',
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={headingStyle}>Welcome to Task Manager</h1>
      <div style={buttonContainerStyle}>
        <button className="btn btn-primary btn-lg mb-2" style={{ borderRadius: '8px',fontSize:'17px', marginBottom: '20px' }} onClick={handleLoginClick}>Login</button>
        <button className="btn btn-success btn-lg" style={{ borderRadius: '8px' ,fontSize:'17px'}} onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};

export default WelcomePage;
