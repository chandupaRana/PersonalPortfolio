const express=require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.set('view engine', 'ejs')

const indexRouter = require('./src/index');
app.use('/', indexRouter);

app.get('/', (req,res) => {
    res.render('home',{title:'Home'});
});

app.listen(port,() => {
    console.log(`Server is Running on port ${port}`);
});