//Define the Schema
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String },
    mobile: { type: String },
    city: { type: String }
});

//Register the Schema
mongoose.model('Employee', employeeSchema);




















