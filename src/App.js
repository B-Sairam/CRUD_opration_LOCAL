import React, {useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Addstud from './Components/Addstud';
import Allstud from './Components/Allstud';
import Editstud from './Components/Editstud';
export const stdContext = React.createContext("");


function App() {


  let [data,setData] =useState([
    {
        name:"sai",
        degree:"B.E",
        dept:"I.T",
        mobile:97327482,
        email:"sairam@gmail.com"
    },
    {
        name:"priya",
        degree:"B.tech",
        dept:"I.T",
        mobile:97323882,
        email:"priya@gmail.com"
    }
]);
  return (
    <div>
    <Router>
      <stdContext.Provider value={{data,setData}}>
    <div style={{display:"grid",gridTemplateColumns:"17% 83%"}}>
    <div><Sidebar/></div>
      <div  style={{}}>
        <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/all-students' element={<Allstud/>}/>
        <Route path='/add-student' element={<Addstud/>}/>
        <Route path='/edit-student/:id' element={<Editstud/>}/>
        <Route path='/' element={<Dashboard/>}/>

      </Routes>
      </div>
    </div>
    </stdContext.Provider>
    </Router>
    </div>
  )
  
  
}

export default App;

