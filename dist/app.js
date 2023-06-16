import express from 'express';
import session from 'express-session';
import { initialize, session as _session } from 'passport';
import LocalStrategy from '' ;
import passport from 'passport';


const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const app = express();

// Initialize express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport.js middleware
app.use(initialize());
app.use(_session());
