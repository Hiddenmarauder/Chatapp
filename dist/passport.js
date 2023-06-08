// Server-side code
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

// Configure Passport with the LocalStrategy
passport.use(new LocalStrategy(
  function(username,password, done) {
    usernameField: 'email',
    passwordField: 'password',
    
));

// Add authentication middleware to your routes
app.post('/login', passport.authenticate('local'), (req, res) => {
  // Handle successful login
  res.redirect('/chat');
});
