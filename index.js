const express = require("express");
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser')



const authroute = require('./router/userRouter')


app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', authroute)


const port = process.env.PORT || 5000
app.listen(5000, () => { console.log(`server running on ${port}`) })

