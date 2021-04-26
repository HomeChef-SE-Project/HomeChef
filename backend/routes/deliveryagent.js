const app = require('express').Router();
let deliveryAgent = require('../models/delivery_agent.model');
let user_global = require('../server');

app.route('/').get((req,res) =>{
    deliveryAgent.find()
    .then(users => res.json(users))
    .catch(err =>res.status(404).json({'Message':err}))
});

    // const homechefname = "Sontinenis home";
    // const google_ID = 478965123015;
    // let profile = {
    //     email:"Nitin246@gmail.com",
    //     name:"Nitin",
        
    // }
    // //const aadhar = req.body.aadharID;
    // const rating = 5.0;
    // const location  = "Vijaywada";
    // const newHomemaker = new HomeMaker({googleID:google_ID, homechefname:homechefname, location:location, profile:profile, rating:rating});

    // newHomemaker.save()
    // .then(() => res.json({message:"Home Maker added!"}))
    // .catch((err) => res.status(404).json({message:err}));

    // HomeMaker.aggregate([{
    //     $addFields : {'items.count' : 0}
    // }])

app.route('/:id/profile').get((req,res) =>{
    deliveryAgent.findOne({googleID: req.params.id})
    .then(user => res.json(user))
    .catch(err =>res.status(404).json({'Message':err}))

});




//yet to work on
// router.route('/:id/addmenu').get(async (req,res) =>{
//     try{
//         await HomeMaker.updateMany(
//             {}
//         )
//     }
//     catch(err){
//         res.json(message:err)
//     }
// })





// router.route('/:id').patch(  async (req,res) =>{
//     try{
//     const updatedUser = await User.updateOne(
//         {_id:req.params.id},
//         {$set : {username: req.body.username}} 
//     )
//     res.json(updatedUser)
//     }catch(err){
//         res.json({message:err})
//     }
// })

module.exports = app;