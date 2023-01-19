import React,{useState,useEffect} from'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [eid,Seteid]=useState("");
  const [ename,Setename]=useState("");
  const [desg ,Setdesg]=useState("");
  const [emp ,Setemp]=useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:4048/api/get").then(resp=>{
      Setemp(resp.data);
      console.log(resp.data);
    })

  },[])

  const SubmitData=()=>{
    Axios.post("http://localhost:4048/api/insert",{
      EID:eid,
      ENAME:ename,
      DESG:desg,
    }).then(()=>{
     alert("Data Inserted Successfully");
     console.log("Data Inserted Successfully");
    })
  }

  return (
    <div className="App">
      <h2>Employee Details</h2>
      <div>
      <label>Emplyee ID</label><br/>
      <input type="number" name="eid" onChange={(e)=>Seteid(e.target.value)}></input><br/>     
      <label>Emplyee Name</label>
      <input type="text" name="ename" onChange={(e)=>Setename(e.target.value)}></input>
      <label>Designation</label>
      <input type="text" name="desg" onChange={(e)=>Setdesg(e.target.value)}></input>
      <button onClick={SubmitData}>Insert Data</button>
      </div>
      <hr></hr>
      <div>
        <h2>Employee List</h2>
        {emp.map((obj)=>{
          return(
            <div>
            Employee_ID : {obj.id} <br/> Employee Name : {obj.ename} <br/> Designation :{obj.desg}
            <hr ></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
