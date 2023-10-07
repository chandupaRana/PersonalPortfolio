/*  File Name: PersonalPortfolio
    Chandupa Ranasinghe
    301284215
    October 4th,2023
*/
const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.set('view engine', 'ejs');

const indexRouter = require('./src/index');
app.use('/', indexRouter);

// Define a route for the contact page
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Handle form submissions from the contact page
app.post('/submit', (req, res) => {
   
    // Redirect to the home page
    res.render('home', { title: 'Home' });
});

app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});
