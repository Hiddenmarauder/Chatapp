import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const app = express();

// Initialize express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(new LocalStrategy());

app.post('/messages', (_, res) => {
  // Logic to store the message in the database
  // Retrieve the message from the request body and save it in the database
  // Send a response indicating success or failure
});

// Add a route for retrieving messages
app.get('/messages', (_, res) => {
  // Logic to retrieve messages from the database
  // Retrieve the messages from the database and send them as a response
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



