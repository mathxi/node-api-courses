const express = require('express');
var helmet = require('helmet');

var cors = require('cors')

const app = express();

app.use(cors())
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());



app.get('/', async (req, res) => {

    res.json('We are home');

})
const port = process.env.PORT; 
app.listen(port,() =>{
    console.log(`app running on port ${port}`);
});