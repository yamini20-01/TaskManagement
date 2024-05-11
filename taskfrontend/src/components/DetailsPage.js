import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './DetailsPage.css'; // Import the CSS file

const DetailsPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate(); 
  useEffect(() => {
    
    const fetchTaskDetails = async () => {
     
      const encodedCredentials = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/${id}`, {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    };

    fetchTaskDetails();
  }, [id]); 

  const handleBack = () => {
    navigate('/all-tasks'); // Navigate to the dashboard page
  };

  return (
    <div className="container">
      <div className="task-details-container">
        <h2 style={{color:'#fff'}}>Task Details</h2>
        {task ? (
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <td>{task.id}</td>
              </tr>
              <tr>
                <th>Task Name</th>
                <td>{task.name}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{task.description}</td>
              </tr>
              <tr>
                <th>Issued Date</th>
                <td>{task.issuedDate}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{task.status}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading task details...</p>
        )}
         <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default DetailsPage;
