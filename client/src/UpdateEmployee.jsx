import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from {'react-router-dom'}
import axios from 'axios'

const UpdateEmployee = () => {
 const {id} = useParams()
  const [firstName, setFristName] = useState()
const [lastName, setLastName] = useState()
const [email, setEmail] = useState()
const [designation, setDesignation] = useState()
const [department, setDepartment] = useState()
const navigate = useNavigate()

useEffect(()=>{
  axios.get('http://localhost:5173/getEmployee' + id)
  .then(result => {console.log(result)
    setFristName(result.data.firstName)
    setLastName(result.data.lastName)
    setEmail(result.data.email)
    setDesignation(result.data.designation)
    setDepartment(result.data.department)
  })

  .catch(err => console.log(err))
}, [])

  return (
    <div className='d-flec vh-100 bg-primary justify-content align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form>
          <h2>Update Employee</h2>
          <div className='mb-2'>
            <label htmlFor=''>First Name</label> 
            <input type='text' placeholder='Enter First Name' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Last Name</label> 
            <input type='text' placeholder='Enter Last Name' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Enter Email</label> 
            <input type='text' placeholder='Enter Email' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Designation</label> 
            <input type='text' placeholder='Enter Designation' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Department</label> 
            <input type='text' placeholder='Enter Department' className='form-control'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateEmployee