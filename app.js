const express =require('express')
const app = express();
app.use(express.json())
const cors=require('cors')
require('dotenv').config();
const router=require('./Routes/route')
let port =process.env.PORT || 5500
app.use(cors());
const connectDB = require('./mongoose/connection')
connectDB().then(() => {
  
}).catch((err) => {
    console.error("Failed to connect to the database: ", err);
});


app.use('/',router)





app.listen(port,()=>{console.log("App is liostenin gin the port ",port)})