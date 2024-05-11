Task Manager

 Project Overview
 
 The Task Manager is a full stack web application designed to help users manage
 their tasks efficiently. It provides features for users to register an account, log in, add
 tasks, view all tasks, view task details, update tasks, delete tasks, view upcoming
 tasks, and delete their account. The application is built using a combination of
 front-end and back-end technologies to provide a seamless user experience

 Technologies Used
 
 Front-end:  ReactJs, React Router, Axios, CSS
 Back-end: SpringBoot, Node.js, MySQl Database, JWT (JSON Web Tokens),Spring Security,Lombok,Express.

 Features
 
 ● User Authentication: Users can register an account or log in to their existing
 account using a username and password. Authentication is secured using
 JWTtokens.
 
 ● Task Management: Users can add tasks with details such as ID, name,
 description, issued date, and status.
 
 ● Userscanviewall tasks, view task details, update tasks, and delete tasks.
 
 ● Upcoming Tasks: Users can view a list of upcoming tasks to stay organized
 and plan their work.
 
 ● AccountManagement: Users can delete their account if they wish to no longer
 use the application

 Endpoints/APIs
 
 Task Management Endpoints (/api/tasks)
 
 ● GET/api/tasks:Retrieve all tasks.
 
 ● POST/api/tasks:Create anewtask.
 
 ● GET/api/tasks/{id}:Retrieve a task by its ID.
 
 ● PUT/api/tasks/{id}:Update atask byits ID.
 
 ● DELETE/api/tasks/{id}:Delete a task by its ID.
 
 ● GET/api/tasks/upcoming:Retrieve upcoming tasks.
 
 User Management Endpoints (/api)
 
 ● POST/api/register:Register a new user.
 
 ● POST/api/login:Loginwith username and password.
 
 ● DELETE/api/users/{username}:Delete a user by username
 


 Authentication:
 
 Authentication is a crucial aspect of any web application to ensure that only
 authorised users can access the system's resources. In the Task Manager project,
 user authentication is implemented using Spring Security along with JSON Web
 Tokens (JWT) for secure authentication.
 
 Technologies Used for Authentication Implementation:
 
 ● Spring Security: Provides comprehensive security services for Java
 applications.
 
 ● JWT(JSON Web Tokens):Acompact,URL-safe means of representing claims
 to be transferred between two parties.
 
 ● MySQLDataBase: Usedfor data access .
 
 Implementation Details
 
 ● UserRegistration:
 
 ○ Users can register using the /api/register endpoint by providing a
 username and password.
 
 ○ The password is securely encoded using a password encoder (not
 explicitly mentioned in the code snippets, but assumed to be
 implemented for security).
 
 ● UserAuthentication:
 
 ○ Authentication is performed via the /api/login endpoint, where
 users provide their credentials (username and password).
 
 ○ Basic authentication is used, where the username and password are
 sent as part of the request header, encoded using Base64.
 
 ○ Uponsuccessful authentication, a JWT token is generated and returned
 to the client, which is used for subsequent authenticated requests.
 
 ○ The token typically contains the user's identity and any necessary
 information related to authorization


 SetUp Project:

 Set Up the Frontend (Server):
 
               1.1 Clone the Project Repository:
               
	                  git clone https://github.com/yamini20-01/TaskManagement
	                  cd taskfrontend
                   
               1.2 Install these dependencies using npm command:
               
	                  npm install react react-router-dom axios react-icons bootstrap
                   
               1.3 Start the frontend development server.
               
                   npm start

Set Up the Backend (Server):

                2.1 Navigate to the Backend Directory:

	                   cd taskbackend
                    
                2.2 Start the backend server




                



 
 
