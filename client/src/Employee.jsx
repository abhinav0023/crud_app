import React, { useEffect } from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Employee = () => {
  const [employee, setEmployee] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5173')
    .then(result => setEmployee(result.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
      <div className='w-70 bg-white rounded p-3'>
        <div>
          <button className='btn btn-dark'>
        <Link to="/create" className='btn btn-sucess'>Add </Link>
          </button>
        </div>
        <table className='table'>
          <thead>
          <tr>
            <th>First Name</th>
            <th>last Name</th>
            <th>Email</th>
            <th>designation</th>
            <th>department</th>
          </tr>
          </thead>
          <tbody>
            {
              employee.map((employee)=>{
                return <tr>
                  <td>{employee.FirstName}</td>
                  <td>{employee.LastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.
                  department}</td>
                  <td> 
                    <Link to={`/update/${user._id}`}className='btn btn-success'>Update</Link>
                    <button className='btn btn-dark
                    '>Delete</button></td>
                </tr>
              })
            }
          </tbody>   
        </table>
      </div>
    </div>
  )
}

export default Employee;