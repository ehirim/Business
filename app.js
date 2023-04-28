const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json())


// Importing Routes
const product = require("./routes/productRoute");

app.use("/api",product);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app
