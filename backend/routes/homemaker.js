const router = require('express').Router();
let HomeMaker = require('../models/home_maker.model');
let user_global = require('../server');


router.route('/').get((req,res) =>{
    HomeMaker.find()
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

router.route('/add').post((req,res) =>{
    const id = user_global.id;
    const homechefname = req.body.homechefname;
    const google_ID = user_global.id;
    let profile = {
        email:user_global.email,
        name:user_global.name,
        phone:user_global.phone,
        address:req.body.address
    }
    const aadhar = req.body.aadharID;

    const newHomemaker = new HomeMaker({googleID:google_ID, homechefname:homechefname, profile:profile, aadharID:aadhar});

    newHomemaker.save()
    .then(() => res.json({message:"Home Maker added!"}))
    .catch((err) => res.status(404).json({message:err}));
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

router.route('/:id/menu/').get( async (req,res) =>{
    try{
        await HomeMaker.findOne({googleID:req.params.id}, function(err,homemaker) {
            res.json(homemaker.items)
        });

    }catch(err){
        //console.log('Inside error')
        res.json({message:err})
    }
})

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

module.exports = router;