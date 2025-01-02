const express = require("express");
const nodemailer = require("nodemailer")
const cors =require("cors")

const app =express();
exports.app = app;
app.use(express.json())
app.use(cors())



app.post("/contact",(req,res)=>{
    let userInfo = req.body 
    const transporter =nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"sara18ec118@gmail.com",
            pass:"skwk leez pbzz wlwf",
        }
    })
    
    const mailOptions = {
        from:userInfo.email,
        to:"sara18ec118@gmail.com",
        replyTo:userInfo.email,
        subject:userInfo.subject,
        text:userInfo.message
    }
    
    
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            res.send({message:err})
        }
        else{
            res.send({message:"email sent"+info})
        }
    })
})


app.listen("8000",()=>{
    console.log("server connected")
})