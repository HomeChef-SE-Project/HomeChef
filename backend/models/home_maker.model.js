const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
    email:{type:String},
    name:{type:String} ,
    phone:{type:Number},
    address:{type:String},
    imageUrl : {type:String , default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU"},
})

const itemSchema = new Schema({
    itemid: {type:Number},
    name:{type:String},
    price:{type:Number,required:true},
    description:{type:String},
    count : {type:Number, default:0},
    imgsrc : {type:String , default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHr2hR8iBZn7Z7kq4cshO4YHgflath0MFSgA&usqp=CAU"}

})

const orderSchema = new Schema({
    orderid : {Number},
    items : [itemSchema],
    date : {type:Date},
    status : {type: String}
})


const homeMakerSchema = new Schema({
    googleID:{type:String, required:true, unique:true},
    homechefname:{type:String},
    rating:{type:Number},  
    aadharID: {type: Number},
    earnings:{type:Number}, 
    profile: profileSchema,
    items: [itemSchema] ,
    location:{type:String},
    available:{type:Boolean},
    nReviews:{type:Number},
    currentOrders : [orderSchema],
    prevOrders : [orderSchema],
})

const homeMaker = mongoose.model('home_maker', homeMakerSchema);
module.exports = homeMaker;
