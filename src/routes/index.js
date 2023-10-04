const routes = require('express').Router();

const adminRoutes = require('./admin/index');
const userRoutes = require('./user/index');

const middleware = require('../middlewares/middlewares')

routes.use('/api/admin/',middleware.middlewareForAdminRoute,adminRoutes);
routes.use('/api/user/',middleware.middlewareForUserRoute,userRoutes)

module.exports = routes;