import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import AuthRoute from './src/routes/authRoute.js';
import routes from './src/routes/baseRoute.js';
import notFound from './src/middleware/notFound.js';
import errorHandler from './src/middleware/errorHandler.js';
import authMiddleware from './src/middleware/authMiddleware.js';
import passport from './src/middleware/passport.js';
import session from 'express-session';

dotenv.config();
//const mongoose = require("mongoose");
//const config = require('./src/config');
const app = express();
const PORT = process.env.PORT || 4000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", AuthRoute);

app.use("/api", authMiddleware, routes);



app.use(errorHandler);
app.use(notFound);


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
