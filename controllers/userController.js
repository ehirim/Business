const ErrorHandler = require("../utils/errorhandler");
const catchAsyncHandler = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");



// Register a User
exports.registerUser = catchAsyncErrors(async(req,res,next) => {

    const {name,email,password,role} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        role
    })

    res.status(201).json({
        success:true,
        user,
    });
});