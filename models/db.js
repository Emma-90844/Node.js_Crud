const mongoose = require('mongoose');

//Dataconnection
mongoose.connect('mongodb://localhost:27017/EmployeeDB',  { useNewUrlParser: true } , (err) => {
    if(!err){
        console.log('MongoDB Connection Successful');
    }
    else{console.log('Error connected to the Database');
}
}); 
