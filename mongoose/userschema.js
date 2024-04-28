const mongoose=require('mongoose')

const user=new mongoose.Schema({
    name:String,
    email:String,
    rno:{
        type:Number,
        unique:true
    },
    batch:String,
    phone:Number,
    address:String,
    cource:String,
    startdate:Date
})


const User=mongoose.model('Students',user);
// const Dependency=mongoose.model('Dependency',dependencies);

module.exports=User;