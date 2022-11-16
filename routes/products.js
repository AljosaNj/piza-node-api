const express = require("express");
const router = express.Router();

const Product = require("../model/Product");

// Get all products
router.get("/", async (req,res) => {
 try {
  const products = await Product.find();
  res.json(products);
 } catch (err) {
   res.json({message: err});
 }
});

// save a product

router.post('/', async (req,res) => {
const product = new Product({
 name: req.body.name,
 description: req.body.description,
 price: req.body.price,
});
try {
 const savedProduct = await product.save();
 res.json(savedProduct)
} catch (err) {
 res.json({message: err});
}
});

//get a specific product
router.get("/:productId",async (req,res) => {
 
try {
  const product = await Product.findById(req.params.productId);
  res.json(product);
 } catch (err) {
   res.json({message: err});
 }
});


// Update Product
router.patch("/:productId",async(req,res) => {
try {
 
 const updatedProduct = await Product.updateOne(
  {_id : req.params.productId},
  {$set : {
   name: req.body.name,
 description: req.body.description,
 price: req.body.price,
  },

  }
 );

 res.json(updatedProduct)
} catch (err) {
  res.json({message: err});
}

});

//delete product
router.delete("/:productId",async (req,res) => {
 try {
  const removeProduct = await Product.remove({_id : req.params.productId});
  res.json(removeProduct)
 } catch (err) {
   res.json({message: err});
 }
})

module.exports = router;