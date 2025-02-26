const pool = require('../config/db');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Todo not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const result = await pool.query('INSERT INTO todos (description) VALUES ($1) RETURNING *', [description]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const result = await pool.query('UPDATE todos SET description = $1, WHERE id = $3 RETURNING *', [description, id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'todo not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'todo not found' });
    res.json({ message: 'todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

