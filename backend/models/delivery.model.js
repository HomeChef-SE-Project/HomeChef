const mongoose = require('mongoose')
const schema = mongoose.Schema
// export the models, the admin one, wait i will do it
const profileSchema = new Schema({
    email:{type:String},
    name:{type:String} ,
    phone:{type:Number},
    address:{type:String},
    imageUrl : {type:String},
})

const itemSchema = new Schema({
    itemid: {type:Number},
    name:{type:String},
    price:{type:Number,required:true},
    description:{type:String},
    count : {type:Number, default:0}

})

const orderSchema = new Schema({
    orderid : {Number},
    items : [itemSchema],
    date : {type:Date},
    status : {type:String}
})


const deliverySchema = new Schema({
    googleID:{type:String, required:true, unique:true},
    agentname:{type:String},
    rating:{type:Number},  
    aadharID: {type: Number},
    earnings:{type:Number}, 
    profile: profileSchema,
    location:{type:String},
    available:{type:Boolean},
    nReviews:{type:Number},
    currentOrder : orderSchema,
    prevOrder : [orderSchema]
})

const delivery_agent = mongoose.model('delivery_agent', deliverySchema);
module.exports = delivery_agent;
