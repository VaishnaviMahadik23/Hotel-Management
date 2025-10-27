require('dotenv').config();

console.log("Server.js file is running...");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authMiddleware = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log('Incoming Request → URL:', req.url, 'Method:', req.method);
  next();
});

app.use(cors());
app.use(express.json()); // modern way to parse JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Test route
app.get('/', (req, res) => res.send('Server is working!'));

// Protected dashboard route
app.get('/api/dashboard', authMiddleware, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard!',
    user: req.user  // contains id and email from JWT
  });
});

// Routes
app.use('/api', authRoutes); // ✅ Only one instance — no duplicates!

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
