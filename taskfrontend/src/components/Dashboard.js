import React, { useState } from 'react';
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import UpcomingTasks from './UpcomingTasks';
import { BsPersonFill } from 'react-icons/bs';
import Reminder from './Reminder';

const Dashboard = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleReminderToggle = () => {
    setIsReminderOpen(!isReminderOpen);
  };

  const iconContainerStyle2 = {
    position: 'absolute',
    top: '0',
    left: '50px',
    width: '240px', 
    height: '65px',
    display: 'flex',
  };

  if (window.matchMedia('(max-width: 768px)').matches) {
    iconContainerStyle2.width = '200px'; // Adjust the width for smaller screens
  }
  
  if (window.matchMedia('(max-width: 480px)').matches) {
    iconContainerStyle2.width = '150px'; // Adjust the width for even smaller screens
  }

  return (
    <div className="dashboard-container">
      <div className="sidenav">
        <h2 className="heading">
        <div style={iconContainerStyle2}>
          <img
            src="https://www.sweetprocess.com/wp-content/uploads/2023/09/task-management-software-34-1024x511.png"
            alt="Logo"
          />
         </div>
          DashBoard
          <div className="icon-container" onClick={toggleProfile}>
            <BsPersonFill />
          </div>
        </h2>
        <Link >Task Logo</Link>
        <Link to="/add-task">Add Task</Link>
        <Link to="/all-tasks">All Tasks</Link>
        <a href="#" onClick={handleReminderToggle}>Reminder</a>
        <div className="dropdown">
          <Link to="#" className="dropbtn" onClick={toggleDropdown}>Settings</Link>
          <div className="dropdown-content">
            <Link to="#">Notifications</Link>
            <Link to="#">Theme</Link>
            <Link to="#">Sharing Enable</Link>
          </div>
        </div>
        <a href="#" onClick={handleLogout}>Logout</a>
      </div>
      <div className="main-content">
        <UpcomingTasks />
        {isReminderOpen && <Reminder />}

        <div className="profile" style={{ display: isProfileOpen ? 'block' : 'none' }}>
          <h3>User Details</h3>
          <p>Name: Yamini</p>
          <p>Email: yaminid636@gmail.com</p>
          <p>Role: User</p>
          <button><Link to="/delete-account">Delete Account</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;