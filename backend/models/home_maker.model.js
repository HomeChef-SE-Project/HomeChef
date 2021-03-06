const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    email:{type:String},
    name:{type:String} ,
    phone:{type:Number},
    address:{type:String}
})

const itemSchema = new Schema({
    itemid: {type:Number},
    name:{type:String},
    price:{type:Number,required:true},
    description:{type:String},

})

const homeMakerSchema = new Schema({
    googleID:{type:String, required:true, unique:true},
    homechefname:{type:String},
    rating:{type:Number},  
    aadharID: {type: Number},
    earnings:{type:Number}, 
    profile: profileSchema,
    items: [itemSchema],
    available:{type:Boolean}
})

const homeMaker = mongoose.model('home_maker', homeMakerSchema);
module.exports = homeMaker;
