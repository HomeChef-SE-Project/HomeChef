const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const homeMakerSchema = new Schema({
    googleID:{type:String, required:true, unique:true},
    homechefname:{type:String},
    rating:{type:Number},  
    aadharID: {type: Number},
    earnings:{type:Number}, 
    profile: profileSchema,
    items: [itemSchema],
    location:{type:String},
    available:{type:Boolean},
    nReviews:{type:Number}
})

const adminSchema = new Schema({
    googleID:{type:String, required:true, unique:true},
    adminname:{type:String},
    pendingReq : [homeMakerSchema] 
})

const admin = mongoose.model('admin', adminSchema);
module.exports = admin;
