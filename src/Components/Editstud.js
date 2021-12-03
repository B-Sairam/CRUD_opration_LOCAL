import React, { useState,useContext,useEffect} from "react";
import {stdContext} from '../App';
import { useNavigate,useParams } from "react-router";

function Editstud(){
    useEffect(()=>{
        if(params.id){
            getData();
        }
    },[])
    let params = useParams();
    let navigate = useNavigate()
    let context = useContext(stdContext);

    function saveHandel(){
    context.data[params.id]= {
        name,
        degree,
        dept,
        mobile,
        email
    }
    context.setData([...context.data])
    navigate('/all-students')
    }
    function getData(){
        let data = context.data[params.id];
        setname(data.name);
        setdeg(data.degree);
        setdept(data.dept);
        setmobile(data.mobile);
        setemail(data.email);
    }

    let [name,setname]=useState('');
    let [degree,setdeg]=useState('');
    let [dept,setdept]=useState('');
    let [mobile,setmobile]=useState('');
    let [email,setemail]=useState('');

  
    
    return(
        
        <div className="col-9 ml-5">
            <h1>Edit Student</h1>
            
                <div className="form-group">
                    <label >Student Name</label>
                    <input value={name} type="text" className="form-control"  
                    onChange={(e)=>setname(e.target.value)}
                    placeholder="Enter name"/>
                   
                </div>
                <div className="form-group">
                    <label>Degree</label>
                    <input value={degree} type="text" className="form-control" onChange={(e)=>setdeg(e.target.value)} placeholder="Your Degree"/>
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <input value={dept} type="text" className="form-control" onChange={(e)=>setdept(e.target.value)} placeholder="Your Department"/>
                </div>
                <div className="form-group">
                    <label>Mobile No</label>
                    <input value={mobile} type="Number" className="form-control" onChange={(e)=>setmobile(e.target.value)} placeholder="Mobile number"/>
                </div> 
                <div className="form-group">
                    <label>Email</label>
                    <input  type="email" className="form-control" onChange={(e)=>setemail(e.target.value)} placeholder="Email address"/>
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={saveHandel}>Submit</button>
             

        </div>
    )
}

export default Editstud;