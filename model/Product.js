const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({

 name: {
  type:String,
  trim: true,
   required: true,
 //required: [true,'Please provide product name'],
 //maxlength: [100, 'Name can not be more than 100 characters'],

 },
 description: {
  type: String,
  required: true,
 //required: [true,'Please provide product description'],
//maxlength: [1000,'Description can not be more than 1000 characters'],
 },
price: {
 type: Number,
  required: true,
 //required: [true,'Please provide product price'],
 default: 0,
},
date: {
 type:String,
 default: Date.now,
},


});


module.exports = mongoose.model("Products",PostSchema);