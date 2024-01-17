const express = require("express");
const routes = express.Router();

const BookstoreRoutes = require("./Bookstore.route");



routes.use("/Bookstore", BookstoreRoutes);


module.exports = routes;
    