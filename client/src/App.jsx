import React from 'react';
// import { useState } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';

function App(){

  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Employee/>}/>
        <Route path='/create' element={<CreateEmployee/>}/>
        <Route path='/update/id:' element={<UpdateEmployee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
   
   )
  }
   
export default App
