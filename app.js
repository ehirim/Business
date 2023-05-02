const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());


// Importing Routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api",product);
app.use("/api",user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app
