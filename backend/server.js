const app = require('./app')
const path = require('path'); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//configs dotenv file(.env)
dotenv.config({path: 'backend/config/.env'})

const connection = mongoose.connect(process.env.Mongoose_connect,{useNewUrlParser: true, useUnifiedTopology: true}).then(response=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`Listening on ports ${PORT}`)
})


