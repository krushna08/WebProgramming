var mysql=require('mysql')
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"serverdb"
    ///if you are creating database remove above line
});
con.connect(function(err){
    if(err){
        console.log("Error occured",err);
    }
    else{
        console.log("Database Connected");

        ////>>>> Create database <<<<////

        // con.query("create Database serverdb",function(err,data){
        //     if(err){
        //         console.log("Error occured while creating database",err);
        //     }
        //     else{
        //         console.log("Database Created !");
        //     }
        //})


        ////>>>> Insert values to Table U can create Table Using command ex. create table Strudent(name varchar(20),...)  <<<<////


        // var sql ="insert into student(name,city) values('Nohil','Jalgaon')";
        // con.query(sql,function(err,data){
        //     if(err){
        //                 console.log("Error occured while Inserting data to database",err);
        //             }
        //            else{
        //                 console.log("Data Inserted to the table !");
        //             }
        // });

        ////>>>> Display Required Data Using Querirs <<<<////

        // var sql="select * from student where city='Nashik'";
        var sql="select * from student ";
        con.query(sql,function(err,result){
            if(err){
                console.log("Error occured while fetching data",err );
            }
            else{
                console.log(result);
            }
        });

    }
});