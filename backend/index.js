const express=require('express');
const routes= require('./src/Routes/routes');
const authRoutes=require('./src/Routes/auth-routes');

const app=express();
const port=3000;

app.use(express.json());

app.use('/' ,routes);
app.use('/auth/signup',authRoutes);

app.listen(port,()=>{
    console.log("server running on port 3000")
})
