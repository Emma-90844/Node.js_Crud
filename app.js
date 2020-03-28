/*

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const handlebars = require('express-handlebars');
const app = express();
const chalk = require('chalk');
app.use(bodyparser.json());
//Dataconnection
mongoose.connect('mongodb://localhost/EmployeeDB', { useUnifiedTopology: true })
.then(() => console.log(chalk.yellow('Connected to the Mongo Database')))
.catch(() => console.log(chalk.red('Cannot connect to the Database')));



// Configuring our templating engine
app.engine(
    'hbs',
    handlebars({
    //   defaultLayout: 'main',
      extname: '.hbs',
      layoutsDir: `${__dirname}/views/layouts/`,
      partialsDir: `${__dirname}/views/partials`
    })
  );
//get
app.get('/employees', (req, res) => {
    res.render('about', { });
});

//Set templating engine
app.set('view engine', 'hbs');


//Schema
const employeeSchema = new mongoose.Schema({
    name: String,
    role: String,
    recidence: String,
    phonenumber: Number,
});
 

//Model
const Employee = mongoose.model("Employee", employeeSchema);

//Function to create a new employee
async function createEmployee(){
    const employee = new Employee({
        name: 'Ayota',
        role: 'Supervisor ',
        recidence: 'Entebbe',
        phonenumber: '078833221',
    });
    const result = await employee.save();
    console.log(result);
    
}
// const newEmployee = createEmployee();
// console.log(newEmployee);


async function getEmployee(){
    return await Employee
    .find({name:'Oringa'});
}
 
async function run(){
    const search = await getEmployee();
    console.log(search);
}
run();








//Set listening port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening to port ${ port }...`);
});

*/