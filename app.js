import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
