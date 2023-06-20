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
const passport = require('./dist/passport');
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(new LocalStrategy());


// Route for signup page
app.get('/', (_, res) => {
  res.send('This is the signup page'); // Replace with your signup page rendering logic
});

// Route for signin page
app.get('/signin', (_, res) => {
  res.send('This is the signin page'); // Replace with your signin page rendering logic
});


// Add authentication route
app.post('/login', passport.authenticate('local', {
  successRedirect: '/x.html',
  failureRedirect: '/index.html',
  failureFlash: true
}));


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



