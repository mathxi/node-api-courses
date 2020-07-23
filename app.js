require('dotenv/config');
console.log("port :", typeof process.env.PORT);
const express = require('express');
var helmet = require('helmet');
const listsRoute = require('./routes/listes')
const elem = require('./routes/elem')
var cors = require('cors')

const app = express();

app.use(cors())
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());


app.use('/listes', listsRoute);
app.use('/elemlist', elem);

app.get('/', async (req, res) => {

    res.json('We are home');

})

const port = process.env.PORT;
app.listen(port,() =>{
    console.log(`app running on port ${port}`);
});