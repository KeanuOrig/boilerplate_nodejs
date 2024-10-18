import { Router } from 'express';
import AuthRoute from './authRoute.js';
import UserRoute from './userRoute.js';

const router = Router();

const defaultRoutes = [
/*     {
        path: '/auth',
        route: AuthRoute,
    }, */
    {
        path: '/users',
        route: UserRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
