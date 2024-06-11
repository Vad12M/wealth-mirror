import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from './routes/authRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.log('Error connecting to the database', err));


const app = express();
app.use(cors());
app.use(express.json());

app.use('/', userRoutes);
app.get('/', (req, res) => {
  res.send('Start');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});