# TODOAPP WITH SOCKET IO AND REACT
REALTIME TODO APP

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)

## About The App
This is a todo list app that can be used by many people in real-time

## Screenshots

![image](https://user-images.githubusercontent.com/56701155/195222029-ba725ce0-58c4-47b5-a6a7-8ac045c09182.png)
![image](https://user-images.githubusercontent.com/56701155/195222065-ec6bcd59-b4e9-4272-b0ce-c7d2496c1c72.png)

## Technologies

- Javascript
- VITE
- React
- React Router
- SocketIO
- Express
- Nodemon

## Setup
- download or clone the repository

### Server
- Setup the cors origin at index.js
```
const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://127.0.0.1:5173"
  }
}); 
```
- run `npm install`
- run `npm start`

### Client
- Go to todo-list-socket and run `npm install`
- Then run `npm run dev`
