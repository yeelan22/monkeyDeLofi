require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const connection = require("./db");
const path = require("path");
// const userRouters = require("./routers/users");
// const authRouters = require("./routers/auth");

const userRouters = require("./routers/users"); // Correct import path
const authRouters = require("./routers/auth"); 

//dataBase connection
connection();
console.log(__dirname);
 

//middlewares
app.use(express.json());
app.use(cors());

//routes
// Error handling middleware


app.use("/api/users", userRouters);
app.use('/api/auth', authRouters);
app.use(express.static(path.join(__dirname, 'client/build')));

// Define any API routes or additional server routes here

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
