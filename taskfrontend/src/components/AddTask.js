import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './AddTask.css';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskId, setTaskId] = useState('');
  const [issuedDate, setIssuedDate] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/tasks', {
        id: taskId,
        name: taskName,
        description: taskDescription,
        issuedDate: issuedDate,
        status: status
      });
      setIsSubmitted(true); 
      alert('Task added successfully!');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleBack = () => {
    navigate('/dashboard'); 
  };



  return (
    <div className="add-task-container">
      <div className="add-task-wrapper">
        <h2 style={{color:'#fff'}} >Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskId">Task ID:</label>
            <input
              type="text"
              id="taskId"
              value={taskId}
              onChange={(e) => setTaskId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskName">Task Name:</label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDescription">Task Description:</label>
            <textarea
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="issuedDate">Issued Date:</label>
            <input
              type="date"
              id="issuedDate"
              value={issuedDate}
              onChange={(e) => setIssuedDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <button type="submit">Add Task</button>
          <button onClick={handleBack}>Back</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
