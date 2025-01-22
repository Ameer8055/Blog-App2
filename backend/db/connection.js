const mongoose=require('mongoose');
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('connection established to DB');
}).catch(()=>{
    console.log('Not Connected');
})