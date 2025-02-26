const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/users", todoRoutes);

app.get('/', (req, res) => {
  res.send('PostgreSQL CRUD API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
