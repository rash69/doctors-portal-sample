const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();


const app = express();


app.use(cors());
app.use(bodyParser.json());

const uri = process.env.DB_PATH;

let client = new MongoClient(uri, { useNewUrlParser: true });


//get
app.get('/', (Req, res) => res.send('thanks everyone'));






const port = process.env.PORT || 5000;
app.listen(port, () => console.log('listening to port 5000.'));