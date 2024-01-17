const Joi = require("joi")

const addBookstore = {
  body: Joi.object().keys({
    BookstoreName: Joi.string().required().trim(),
    BookName : Joi.string().required().trim(),
    author : Joi.string().required().trim(),
    description: Joi.string().required().trim(),
  }),
};

module.exports = { addBookstore};