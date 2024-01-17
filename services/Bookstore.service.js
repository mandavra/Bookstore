const { BookstoreSchema } = require("../models");

const addBookstore = (body) => {
  return BookstoreSchema.create(body);
};

const getBookstore = () => {
  return BookstoreSchema.find();
};

const deleteBookstore = (id) => {
  return BookstoreSchema.findByIdAndDelete(id);
};

module.exports = { addBookstore, getBookstore, deleteBookstore};
