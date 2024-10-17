//import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();


//initialize express
const app = express();

//set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname, '/')));  //caters for static files eg images, css files and js used in front-end.
app.use(express.json());
app.use(express.urlencoded({extended: true }));

const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes)
//display of registration page

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});
//display of the login page(use sendFile method)
app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'login.html'));
});

//start server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`)
});