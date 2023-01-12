const express =require("express");
const cors =require("cors");
const app=express();
const mysql=require("mysql");
const bodyparse=require("body-parser");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"webapp"
});


app.use(bodyparse.json()); 
app.use(bodyparse.urlencoded({extended:true}))


// app.get("/",(req,res)=>{

//     const querystr="Insert into curdoperation(moviename,review) values('PATHAAN','Fantastic')";
//     con.query(querystr,(err,data)=>{
//         if(err){
//                     console.log("Error occured while Inserting data to database",err);
//                 }
//                 else{
//                     console.log("Data Inserted to the table !");
//                  }
//     })
//     res.send("Hello World");/
//      })
 app.post("/api/insert" ,(req, res)=>{
    
    const moviename=req.body.moviename;
    const review=req.body.review;
    const querystr="Insert into curdoperation(moviename,review) values(?,?)";
    console.log("+++++"+moviename);
    con.query(querystr,[moviename,review],(err,data)=>{
        console.log("*****"+err);
        if(err){
                    console.log("Error occured while Inserting data to database",err);
                }
                else{
                    console.log("Data Inserted to the table !");
                 }
    })
})


app.listen(3002);
console.log("Server runnning at 3002 port");