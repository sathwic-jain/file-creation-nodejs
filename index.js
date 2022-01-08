import express from "express";
import fs from "fs";
const app=express();

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{console.log("listening to",PORT)});

var thedate=new Date();
const date=thedate.getDate();
const month=thedate.getMonth()+1;
const year=thedate.getFullYear();
const fdate=`${thedate.getDate()}-${thedate.getMonth()+1}-${thedate.getFullYear()}`;

const time=`${thedate.getHours()}-${thedate.getMinutes()}-${thedate.getSeconds()}`;
const filename=`${fdate}-(${time})`
var timestamp=Date.now();
timestamp=timestamp.toString();

app.get("/",async(req,res)=>{
    res.send("Welcome to File-creation app");
})

app.get("/add",async(request,response)=>{
    console.log("hi");
    fs.writeFile(`File/${filename}.txt`,timestamp,function(err){
        if(err)console.log(err);
        else response.send("added")
    })
});

app.get("/get",async(request,response)=>{
    console.log("getting");
    fs.readdir("File","utf-8",function (err,content){
        if(err)response.send(err);
        else response.send(content);
    })
})