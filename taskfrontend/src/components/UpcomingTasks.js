import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpcomingTasks.css';
const UpcomingTasks = () => {
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingTasks = async () => {
     
      const encodedCredentials = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:8080/api/tasks/upcoming', {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });
        setUpcomingTasks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching upcoming tasks:', error);
        setIsLoading(false);
      }
    };
    fetchUpcomingTasks();
  }, []);

  return (
    <div className="upcoming-tasks-container">
        <div className="upcoming-tasks-content">
      {isLoading ? (
        <p>Loading upcoming tasks...</p>
      ) : (
        <table>
          <thead>
          <h2>Upcoming Tasks</h2>
            <tr>
              <th>Task Name</th>
              <th>Issued Date</th>
            </tr>
          </thead>
          <tbody>
            {upcomingTasks.map(task => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.issuedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};

export default UpcomingTasks;
