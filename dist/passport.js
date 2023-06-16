// Server-side code
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

// Configure Passport with the LocalStrategy
passport.use(new LocalStrategy(
   {

    usernameField: 'email',
    passwordField: 'password'
  },

  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Invalid username.' });
      }
      if (!user.validatePassword(password)) {
        return done(null, false, { message: 'Invalid password.' });
      }
      return done(null, user);
    });
  }
    
));

// Add authentication middleware to your routes
app.post('/login', passport.authenticate('local', {
  successRedirect: '/index.html',
  failureRedirect: '/404.html',
  failureFlash: true
})); 

