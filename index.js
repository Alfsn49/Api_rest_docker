const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    next();
})

//test route
app.get('/', (req, res, next) => {
    res.send('Hello world!');
});

//CRUD routes

app.use('/users', require('./routes/users.routes.js'));

//error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message || 'Internal server error';
    res.status(status).json({message: message});
}
);

//sync sequelize models to the database, then start the server
sequelize.sync()
    .then(result => {
        console.log('Base de datos conectada')
        app.listen(3000);
    })
    .catch(err => console.log(err));