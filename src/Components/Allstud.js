import React from "react";
import { useContext } from "react";
import {stdContext} from '../App';
import { useNavigate } from "react-router";


function Allstud(){
  let context = useContext(stdContext);
  let navigate = useNavigate()
  function deleteStd(e){
      context.data.splice(context.data.indexOf(e),1);
      context.setData([...context.data])
  }
    return(
        <div>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col"> Degeer</th>
      <th scope="col">Dept</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    {
        context.data.map((e,i)=>{
            return <tr key={i}>
            <th scope="row">{i+1}</th>
            <td>{e.name}</td>
            <td>{e.degree}</td>
            <td>{e.dept}</td>
            <td>{e.mobile}</td>
            <td>{e.email}</td>
            <td><button className="btn btn-primary" onClick={()=>{navigate('/edit-student/'+ i)}}>Edit</button>&nbsp;&nbsp; <button className="btn btn-danger" onClick={()=>deleteStd(e)}>Delete</button></td>
          </tr>
        })
    }
  </tbody>
</table>

        </div>
    )
}

export default Allstud;