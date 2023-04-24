const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8080 ;

const postRoutes = require('./routes');

app.use("/" , postRoutes)
mongoose.connect("mongodb+srv://Pradyumna:Pradyumna@cluster0.qxvv1hh.mongodb.net/prtTest")
.then( () => {
    app.listen( port , () => {
        console.log(`server is up on port ${port}`);
    })
}).catch( (err) => {
    console.log(err.message);
})