import express from 'express';
const app = express();
const port = 3000; // You can change this to any desired port number
import { connect, Schema, model } from 'mongoose';

app.get('/', (req, res) => {
  req.send(sign-up.html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Connect to MongoDB
connect('mongodb://localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a User model/schema
const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
});

const User = model('User', userSchema);


