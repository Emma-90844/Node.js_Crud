const mongoose = require('mongoose');

//Mongo DB connection
mongoose.connect('mongodb://localhost:27017/EmployeeDB',  { useNewUrlParser: true } , (err) => {
    if(!err){
        console.log('MongoDB Connection Successful');
    }
    else{console.log('Error connected to the Database');
}
}); 
require('./employee.model');