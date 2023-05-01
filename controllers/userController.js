const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");




// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    
    const {name, email, password, role} = req.body;
    
    const user = await User.create(req.body);

    const  token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token
    });
});


// Login a User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const {email, password} = req.body;

    // perform a check if user has password and email
    if(!email || !password){
        return next(new ErrorHandler("Please enter email and password", 400))
    }

    const user = await User.findOne({ email }).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const token = user.getJWTToken();

    res.status(200).json({
        success:true,
        token
    });
});