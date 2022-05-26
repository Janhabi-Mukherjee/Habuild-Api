const {Router}= require('express');
const jwt=require('jsonwebtoken');
const pool=require('../../db');

const router=Router();

router.post('/', async(req,res)=>{

    const {email,password}=req.body;
    
    try{
        const user= await pool.query('SELECT * FROM users WHERE email = $1', [email]);
       //emailcheck
        if(user.rows.length===0)
           return res.status(401).json({error:"Email is incorrect"});
        //passwordCheck
        if(password!=user.rows[0].password)
           return res.status(401).json({error: "Incorrect password"});
        
        //sending to JWT helper
        let tokens= generateJwtTokens(user.rows[0]);
        res.json.send(tokens);
    }
    catch(err){

        console.log(err);
    }
});

module.exports= router;