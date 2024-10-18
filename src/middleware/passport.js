import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from "../models/user.js";

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT_URI
}, async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({where: { email: profile.emails[0].value }});
    
      if (existingUser) {
        // existingUser.accessToken = accessToken;
        return done(null, existingUser);

      } else {

        const newUser = await User.create({
            email: profile.emails[0].value,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            role: "guest",
        });

        // newUser.accessToken = accessToken;
        return done(null, newUser);
      }

    } catch (error) {
        console.error('Error creating user:', error);
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;
