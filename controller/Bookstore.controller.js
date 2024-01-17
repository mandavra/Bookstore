const { Bookstoreservice } = require("../services");

const addBookstore = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const Bookstore = await Bookstoreservice.addBookstore(body);
    res.status(201).json({
      message: "Bookstore Created success",
      
      data: Bookstore,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getBookstore = async (req, res) => {
    const Bookstore = await Bookstoreservice.getBookstore();
  
    console.log(Bookstore, "get");
  
    res.status(200).json({
      message: "Bookstore get success",
      data: Bookstore,
    });
  };
  


  const deleteBookstore = async (req, res) => {

  
    let id = req.params.id;
  
    const Bookstore = await Bookstoreservice.deleteBookstore(id);
  
  
    console.log(Bookstore, "delete");
  
    res.status(200).json({
      message: "Bookstore delete success",
      data: Bookstore,
    });
  };  
  
module.exports = { addBookstore,getBookstore,deleteBookstore};
