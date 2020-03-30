//Define the Schema
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: { type: String , required: "This field is required"},
    email: { type: String },
    mobile: { type: String }, 
    city: { type: String }
}); 
//Custom validation for email
/*
employeeSchema.path('email').validate((val) => {
    emailRegex  = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z{2,5}])$/; 
    return emailRegex.test(val);
}, 'Invalid email, Please check and try  again');
*/

//Register the Schema
mongoose.model('Employee', employeeSchema);














