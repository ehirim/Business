const mongoose = require("mongoose");



const orderSchema = new mongoose.Schema({
    purchaseInfo: {
        address: {
            type:String,
            required:true
        },
        city: {
            type:String,
            required:true
        },
        orderItems: [
            {
            name:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            product:{
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
            },   
        ],
        user:{
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        paymentInfo:{
            id:{
                type:String,
                required:true,
            }
        },
        paidAt:{
            type:Date,
            required: true,
        },
        itemsPrice:{
            type:Number,
            required: true,
            default:0
        },
        taxAmount:{
            type:Number,
            required: true,
            default:0
        },
        shippingCost:{
            type:Number,
            required: true,
            default:0
        },
        totalAmount:{
            type:Number,
            required: true,
            default:0
        },
        orderStatus:{
            type:NString,
            required: true,
            default:"Processing"
        },
        deliveredAt: Date,
        createdAt: {
            type:Date,
            default: Date.now,
        },
    }
});



modules.exports = mongoose.model("Order", orderSchema);