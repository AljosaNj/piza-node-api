const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')

const bodyParser = require("body-parser")
const cors = require('cors');
//Middle ware
app.use(bodyParser.json());
app.use(cors());

//import the routes
const productRoute = require("./routes/products")

app.use('/products',productRoute);





app.get("/",(req,res) => {
 res.send("Please use /products");
});



mongoose.connect(process.env.MONGO_URI, ()=> {
 console.log("connected");
})


app.listen(5000)