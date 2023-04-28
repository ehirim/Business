const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");

const router = express.Router();

// Get All Products
router.route("/products").get(getAllProducts);


// Create Product --- Business
router.route("/product/new").post(createProduct);

// Update / Delete Product --- Business
router.route("/product/:id").put(updateProduct).delete(deleteProduct)


// Get Product Details
router.route("/product/:id").get(getProductDetails);




module.exports = router