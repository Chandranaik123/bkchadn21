const express = require('express')
const mongoose=require('mongoose')
const User =require('../mongoose/userschema')

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hello there");
})
router.post('/login',(req,res)=>{
    // console.log(req-.body);
    const {email,password}=req.body;
    if(email=="sathwikacharya61@gmail.com"&&password==1234){
        res.status(200).send({message:"LoggedIn successfully",user:email,state:true});
    }else{
        res.status(200).send({message:"Wrong credentials",state:false});
    }
})
router.get('/user',async(req,res)=>{
    try{
        const user=await User.find();
        if(user.length>0){

            res.json(user);
        }else{
            res.send("No USer exists ")
        }
        // return;
    }
    catch(err){
        console.log(err);
    }
})
router.post('/user', async (req, res) => {
    const { name, rno, batch, address, cource, startdate } = req.body;
    try {
        const user = await User.findOne({ name: name, rno: rno })
        if (!user) {
            User.create({
                name: name,
                batch: batch,
                rno: rno,
                address: address,
                cource: cource,
                startdate: startdate
            }).then(newuser => {
                res.status(200).send({ message: "Added Successfully", state: true });
            })
            // .catch((err) => {
            //     res.status(500).send({ message: "Cannot create the user", state: false });
            // });
        } else {
            res.status(200).send({ message: "User exists", state: false });
        }
    } catch (err) {
        console.log(err);
        // res.status(500).send({ message: "Internal Server Error", state: false });
        res.status(200).send({ message: "User exists", state: false });
    }
})

router.delete('/user',async(req,res)=>{
    const {email,name,rno}=req.body;
    try{
        const user= await User.findOne({name:name,rno:rno})
        if(user){
            
        
        await User.deleteOne({name:name,rno:rno}).then((user)=>{
            // console.log(user)
            res.status(200).send({message:"User delted",state:true})
        }).catch((err)=>{
            console.log(err)
            res.status(500).send({message:"Cannot delte the user ",state:false});
        })
    }
    else{
        res.status(500).send({message:"User not exists",state:false});

    } 
    } catch(err){
        console.log(err)
        }
})

module.exports=router;