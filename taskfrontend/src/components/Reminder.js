import React from 'react';
import './Reminder.css';
const Reminder = () => {
  // Mock data for tasks
  const tasks = [
    { id: 1, name: 'Python App', status: 'In progress', time: '2:00 PM' },
    { id: 2, name: 'Interview', status: 'Upcoming', time: '11:30 AM' },
   
   
  ];

  return (
   
        <div className="upcoming-tasks-container">
        <div className="upcoming-tasks-content">
      <h2>Reminder</h2>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Reminder;
