const express = require("express");
const { 
    getAllProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getProductDetails 
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Get All Products
router.route("/products").get(getAllProducts);


// Create Product --- Business
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// Update --- Business
router.route("/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

// Delete Product --- Business
router.route("/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);


// Get Product Details
router.route("/product/:id").get(getProductDetails);




module.exports = router