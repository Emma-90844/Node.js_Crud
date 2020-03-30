const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', (req, res) => {
    res.render('employee/addOrEdit', {
         viewTitle: " Insert Employee"});
});

router.post('/', (req, res) => {
       insertRecord(req, res);
});

//FUNCTION TO INSERT DATA INTO THE DATABASE
const Employee = mongoose.model("Employee");
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
//DISPLAY THE RECORD
router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){
            res.render('employee/list', {
                list: docs
            });
        } else {
            console.log('Error in retriving employee list' + err);
        }
    });
});



module.exports = router;




















