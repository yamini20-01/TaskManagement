import React from 'react';
import axios from 'axios';
import { useParams , useNavigate } from 'react-router-dom';


const DeleteTask = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const handleDelete = async () => {
   
  
    const encodedCredentials = localStorage.getItem('token');

    try {
      const response = await axios.delete(`http://localhost:8080/api/tasks/${id}`, {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
        },
      });

      if (response.status === 200) {
        alert('Task deleted successfully');
        navigate('/all-tasks'); 
      } else {
        alert('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task');
    }
  };

  return (
    <div>
      <h2>Delete Task</h2>
      <p>Are you sure you want to delete this task?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
    </div>
  );
};

export default DeleteTask;
