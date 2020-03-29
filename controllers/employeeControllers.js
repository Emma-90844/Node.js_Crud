const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model("Employee");

router.get('/', (req, res) => {
    res.render('employee/addOrEdit', {
         viewTitle: " Insert Employee"});
});

router.post('/', (req, res) => {
       insertRecord(req, res);
});

//FUNCTION TO INSERT DATA INTO THE DATABASE
function insertRecord(req, res){
    const employee = new Employee();
    employee.fullName =  req.body.fullName;
    employee.email =  req.body.email;
    employee.mobile = req.body.mobile;
    employee.city =  req.body.city;
    employee.save((err, doc) => {
        if(!err) res.redirect('employee/list');
        else {
            console.log('Error during record insertation'+ err);
        }
    });
}

router.get('/list', (req, res) => {
    res.json('from list');
});

module.exports = router;




















