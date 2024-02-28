const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    desgination:String,
    department:String,
})

const EmployeeModel = mongoose.model("employee",EmployeeSchema);
module.exports = EmployeeModel;