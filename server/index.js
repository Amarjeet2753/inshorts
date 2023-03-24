import Connection from './connection/db.js';
import DefaultData from './default.js'
import express from 'express';
const app = express();

import cors from 'cors'

import Route from './routes/route.js'

app.use(cors());
app.use('/',Route);
Connection(); 

app.listen(8000,()=>{
    console.log("server running at 8000")
})

DefaultData();