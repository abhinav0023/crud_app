import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CreateEmployee = () => {


// start from usestate hook
const [firstName, setFristName] = useState()
const [lastName, setLastName] = useState()
const [email, setEmail] = useState()
const [designation, setDesignation] = useState()
const [department, setDepartment] = useState()
const navigate = useNavigate()


const Submit = () => {
  e.preventDefault();
  axios.post("http://localhost:5173/create", {firstName, lastName, email, designation, department})
  .then(result => 
    console.log(result),
    navigate('/')
    )
  .catch (err=> console.log(err))
}

  return (
        <div className='d-flex vh-100 bg-color-dark justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h3>
            Add Employees
          </h3>
          <div className='mb-2'>
            <label htmlFor=''>First Name</label>
            <input type='text' placeholder='Enter First Name' className='from-control' onChange={(e) => setFristName(e.target.value)}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Last Name</label>
            <input type='text' placeholder='Enter Last Name' className='from-control' onChange={(e) => setLastName(e.target.value)}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='Enter Your Email' className='from-control' onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Designation</label>
            <input type='text' placeholder='Enter Designation' className='from-control' onChange={(e) => setDesignation(e.target.value)}/>
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Department</label>
            <input type='text' placeholder='Enter Your Department' className='from-control' onChange={(e) => setDepartment(e.target.value)}/>
          </div>
          <button className='btn btn-dark'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployee