import React, { useState,useContext } from "react";
import {stdContext} from '../App';
import { useNavigate } from "react-router";

function Addstud(){
    let navigate = useNavigate()
    let context = useContext(stdContext);

    function saveHandel(){
    context.data.push({
        name,
        degree,
        dept,
        mobile,
        email
    })
    navigate('/all-students')
    }

    let [name,setname]=useState('');
    let [degree,setdeg]=useState('');
    let [dept,setdept]=useState('');
    let [mobile,setmobile]=useState('');
    let [email,setemail]=useState('');
    
    return(
        
        <div className="col-9 ml-5">
            <h1>Add Student</h1>
            
                <div className="form-group">
                    <label >Student Name</label>
                    <input type="text" className="form-control"  
                    onChange={(e)=>setname(e.target.value)}
                    placeholder="Enter name"/>
                   
                </div>
                <div className="form-group">
                    <label>Degree</label>
                    <input type="text" className="form-control" onChange={(e)=>setdeg(e.target.value)} placeholder="Your Degree"/>
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <input type="text" className="form-control" onChange={(e)=>setdept(e.target.value)} placeholder="Your Department"/>
                </div>
                <div className="form-group">
                    <label>Mobile No</label>
                    <input type="Number" className="form-control" onChange={(e)=>setmobile(e.target.value)} placeholder="Mobile number"/>
                </div> 
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(e)=>setemail(e.target.value)} placeholder="Email address"/>
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={saveHandel}>Submit</button>
             

        </div>
    )
}

export default Addstud;