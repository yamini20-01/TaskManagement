// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'; // Correct import path
import LoginPage from './components/LoginPage'; // Correct import path
import RegisterPage from './components/RegisterPage'; // Correct import path
import Dashboard from './components/Dashboard';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import DetailsPage from './components/DetailsPage';
import DeleteTask from './components/DeleteTask';
import UpdateTaskPage from './components/UpdateTask';
import DeleteUser from './components/DeleteUser';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/add-task" element={<AddTask />} />

          <Route path="/all-tasks" element={<AllTasks />} />

          <Route path="/details/:id" element={<DetailsPage />} />

          <Route path="/delete-account" element={<DeleteUser />} />

          <Route path="/delete/:id" element={<DeleteTask />} />
          
          <Route path="/update-task/:id" element={<UpdateTaskPage />} />



          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

