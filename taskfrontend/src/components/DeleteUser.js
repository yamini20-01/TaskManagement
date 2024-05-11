import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Basic authorization credentials
      const username = 'yamini';
      const password = 'yamini';
      const credentials = `${username}:${password}`;
      //const encodedCredentials = btoa(credentials);
      const encodedCredentials = localStorage.getItem('token');
      // Make DELETE request to delete user
      const response = await axios.delete('http://localhost:8080/api/users/yamini', {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('User deleted successfully');
        navigate('/'); // Redirect to WelcomePage after successful deletion
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('An error occurred while deleting user');
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete your account?</p>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteUser;
