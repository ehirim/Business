const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter a product name"]
    },
    description:{
        type:String,
        required:[true, "Please enter a description"]
    },
    category:{
        type:String,
        required:[true, "Please enter a category"]
    },
    price:{
        type:Number,
        required:[true, "Please enter a price"],
        maxLength: [7, "Price cannot exceed 7 characters"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})



module.exports = mongoose.model("Product", productSchema);