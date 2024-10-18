import User from "../models/user.js";
import passport from 'passport';

export default class AuthService {

    static async googleAuth(req) {
        return passport.authenticate('google', { scope: ['profile', 'email'], accessType: 'offline', prompt: 'consent select_account' })(req, res, next);
        return passport.authenticate('google', { scope: ['profile', 'email'] });
    }
    
    static async googleCallback(req) {
        return "Test";
    }

}
