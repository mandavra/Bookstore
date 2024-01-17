const express = require("express");
const validate = require("../middleware/validate");
const { BookstoreValidation } = require("../validations");
const { BookstoreController } = require("../controller");

const route = express.Router();

route.post("/add", validate(BookstoreValidation.addBookstore), BookstoreController.addBookstore);
route.get("/get", BookstoreController.getBookstore);
route.delete("/delete/:id", BookstoreController.deleteBookstore);
module.exports = route;
