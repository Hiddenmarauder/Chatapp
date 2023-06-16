import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { initialize, session as _session } from 'passport';
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

passport.use(new LocalStrategy());

// Rest of your code...


