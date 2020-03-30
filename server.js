require('./models/db');

const express = require('express');
const path = require('path'); 
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const app = express();


app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultlayout: 'mainlayout', layoutDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');


const employeeController = require('./controllers/employeeControllers');
const homeController = require('./controllers/homeController');


app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json()); 

app.use('/employee', employeeController);
app.use('/home', homeController);


//Set listening port
app.listen(1000, () => {
    console.log('Express server started at port: 1000');
});










