import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './AllTasks.css'; // Import the CSS file

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate('/dashboard'); 
  };
  useEffect(() => {
   
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tasks');
        setTasks(response.data);
        
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); 

  return (
    <div className="container">
      <div className="task-table-container">
        <h2 style={{color:'#fff'}}>All Tasks</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>
                  <button><Link to={`/details/${task.id}`}>Details</Link></button>
                  <button><Link to={`/update-task/${task.id}`}>Update</Link></button>
                  <button><Link to={`/delete/${task.id}`}>Delete</Link></button>

                </td>
              </tr>
                
            ))}
            <button onClick={handleBack} style={{backgroundColor:'#fff'}}>Back</button>
           </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default AllTasks;
