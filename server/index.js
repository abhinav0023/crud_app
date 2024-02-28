const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud")

app.get('/', (req,res) => {
    EmployeeModel.find({})
    .then(users => res.json(employees))
    .catch(err => res.json(err))
})
app.get('/getEmployee/:id', (req,res) => {
    const id = req.params.id;
    EmployeeModel.findById({_id:id})
    .then(users => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/createEmployee' ,(req,res)=>{
  EmployeeModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("server is Running");
});