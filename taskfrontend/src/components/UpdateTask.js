import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UpdateTask.css';


const UpdateTaskPage = () => {
  const [id, setId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); 

  const handleUpdate = async () => {
 
   
    const encodedCredentials = localStorage.getItem('token');

    try {
      const response = await axios.put(`http://localhost:8080/api/tasks/${id}`, {
        name: taskName,
        description: taskDescription,
      
      }, {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.status === 200) {
      
        alert('Task Updated Successfully') 
        setTimeout(() => {
          setSuccessMessage(''); 
        }, 3000);
        
    
      } else {
        alert('Failed to update task.');
      }
    } catch (error) {
      alert('Failed to update task.');
    }
  };

  return (
    <div className="container">
    <div className="update-task-container">
      <h2>Update Task</h2>
      <form>
        <div className="form-group">
          <label htmlFor="id">Task ID:</label>
          <input
            type="text"
            id="id"
            className="input-field"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            className="input-field"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskDescription">Task Description:</label>
          <textarea
            id="taskDescription"
            className="input-field"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Task Status:</label>
          <textarea
            id="status"
            className="input-field"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="button"
          className="btn btn-update"
          onClick={handleUpdate}>Update</button>

<button type="button" className="btn btn-back" onClick={() => navigate('/all-tasks')}>
          Back
        </button>
      </form>
      </div>
    </div>
  );
};

export default UpdateTaskPage;