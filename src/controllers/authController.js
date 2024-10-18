
import BaseController from './baseController.js';
import AuthService from '../services/authService.js';
import ResponseHandler from '../helpers/responseHandler.js';
import passport from 'passport';
import User from "../models/user.js";

export const googleAuth = (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'], accessType: 'offline', prompt: 'consent select_account' })(req, res, next);
};

export const googleCallback = passport.authenticate('google', { 
        successRedirect: '/put the frontend url here',
        failureRedirect: '/login',
    /* }, (req, res) => { console.log(res) */

});