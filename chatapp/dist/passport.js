// Server-side code
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

// Configure Passport with the LocalStrategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'Invalid email.' });
        }

        const isValidPassword = await user.validatePassword(password);

        if (!isValidPassword) {
          return done(null, false, { message: 'Invalid password.' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

module.exports = passport;


