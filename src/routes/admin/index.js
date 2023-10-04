const routes = require("express").Router();

const adminRouteOne = require('./adminOneRoutes');
const adminRouteTwo = require('./adminTwoRoutes')

const middleware = require('../../middlewares/middlewares')

routes.use("/",middleware.middlewareForAdminOneRoute, adminRouteOne);
routes.use("/two",adminRouteTwo)


module.exports = routes;

