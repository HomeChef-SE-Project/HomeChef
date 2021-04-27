const app = require('express').Router();
let Admin = require('../models/admin.model');
let user_global = require('../server');





// const adminname = "Neil";
//     const google_ID = 106739048184481232413;
//     let profile = {
//         email:"fredneil69@gmail.com",
//         name:"Fred"
//     }
    // //const aadhar = req.body.aadharID;
    // const rating = 5.0;
    // const location  = "Bangalore";
    // const newAdmin = new Admin({googleID:google_ID, adminname:adminname, profile:profile});

    // newAdmin.save()



app.route('/').get((req,res) =>{
    Admin.find()
    .then(users => res.json(users))
    .catch(err =>res.status(404).json({'Message':err}))
});


app.route('/:id').get((req,res) =>{
    Admin.findOne({googleID:req.params.id})
    .then(adm => {res.json(adm.pendingReq)
    console.log('admin data')
    console.log(adm)
    console.log(adm.pendingReq)
    })
    .catch(err =>res.status(404).json({'Message':err}))
});

app.route('/del').post((req,res)=>{
    Admin.updateMany({},
    { $pull: { 'pendingReq': {"googleID": req.body.googleID} }},
    {multi: true}
 ).then(prom=>{
     console.log('pulled out homechef data')
     console.log(prom)
 })
})

app.route('/add').post((req, res)=>{
    console.log('recieved req:')
    console.log(req.body)
    Admin.updateMany(
        {},
        {$push:{
            pendingReq: { 
                homechefname:req.body.lastname, 
                profile:{
                    email:req.body.email,
                    phone: req.body.mobile,
                    address: req.body.address
                }, 
                aadharID:req.body.aadhar}
            
        }}
    ).then(cont=> {
        //res.json({message: 'done'})
        console.log('promise done')
        console.log(cont)
    })
})



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

app.route('/:id/profile').get( async (req,res) =>{
    try{
        console.log('requested admins')
        console.log(req.params.id)
        await Admin.findOne({googleID:req.params.id}, function(err,admin) {
            if(admin == null){
                console.log('No admin found')
            }
            else {
                res.json(admin);
            }
        });

    }catch(err){
        console.log('Inside error')
        res.json({message:err})
    }
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