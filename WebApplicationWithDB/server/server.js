const express=require("express");
const mysql=require("mysql");
const bodyparse=require("body-parser");
const cors=require("cors");

const app=express();

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"reactjs"   
})

con.connect(function(err){
    if(err){
        console.log("Error while establishing connection with database",err);
    }
    else{
        console.log("Database connection successful");
    }
})
app.use(cors());
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));

app.get("/api/get",(req,res)=>{
    const querystr="select * from employee";
    con.query(querystr,(err,data)=>{
        if(err){
            console.log("Error While Get Method ",err);
        }
        else{
            res.send(data);
        }
    })
});

app.post("/api/insert",(req,res)=>{

    eid=req.body.EID;
    ename=req.body.ENAME;
    desg=req.body.DESG;

    const querystr="insert into employee(eid,ename,desg) values(?,?,?)";
    console.log("Insert Method");
    console.log(eid);
    console.log(ename);
    console.log(desg);
    con.query(querystr,[eid,ename,desg],(err,data)=>{
        if(err){
            console.log("Error in Post Method",err);
        }
        else{
            console.log("Data added to Database");
        }
    })
})
app.listen(4048);
console.log("Server is running at port number 4048");