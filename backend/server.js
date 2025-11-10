require('dotenv').config();

console.log("Server.js file is running...");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authMiddleware = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Incoming Request → URL:', req.url, 'Method:', req.method);
  next();
});

// CORS
app.use(cors({ origin: 'http://localhost:4200' }));

// JSON parser
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Test route
app.get('/', (req, res) => res.send('Server is working!'));

// Protected dashboard route
app.get('/api/dashboard', authMiddleware, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard!',
    user: req.user
  });
});

// Auth routes
app.use('/api', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
