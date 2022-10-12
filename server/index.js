//👇🏻index.js
const express = require("express");
const app = express();
const PORT = 4000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://127.0.0.1:5173"
  }
});

let todoList = [];

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("addTodo", (todo) => {
    todoList.unshift(todo);
    socketIO.emit("todos", todoList);
    });

  socket.on("deleteTodo", (id) => {
      todoList = todoList.filter((todo) => todo.id !== id);
      socketIO.emit("todos", todoList);
    });

  socket.on("disconnect", () => {
      socket.disconnect();
      console.log("🔥: A user disconnected");
    });

    socket.on("viewComments", (id) => {
      for (let i = 0; i < todoList.length; i++) {
          if (id === todoList[i].id) {
              socket.emit("commentsReceived", todoList[i]);
          }
      }
  });

  socket.on("updateComment", (data) => {
    const { user, todoID, comment } = data;

    for (let i = 0; i < todoList.length; i++) {
        if (todoID === todoList[i].id) {
            todoList[i].comments.push({ name: user, text: comment });
            socketIO.emit("commentsReceived", todoList[i]);
        }
    }
  });
});

app.get("/api", (req, res) => {
  res.json(todoList);
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});