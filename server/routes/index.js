import express from 'express';
import welcomeRoute from './welcome.routes';
import allRoutes from './all.routes';

const app = express.Router();

app.use(welcomeRoute);
app.use(allRoutes);

export default app;
