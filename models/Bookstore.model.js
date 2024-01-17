const mongoose = require("mongoose");

const BookstoreSchema =  mongoose.Schema({
  BookstoreName: {
    type: String,
    
  },
  BookName : {
    type: String,
    
  },
  Bookprice: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Bookstore = mongoose.model("BookstoreSchema", BookstoreSchema);

module.exports = Bookstore;