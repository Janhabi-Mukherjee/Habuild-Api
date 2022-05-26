const pool= require('../db');
const jwtTokens=require('./helper/helper');


const getDisplay=async(req,res)=>{

    try{
        const results= await pool.query("SELECT T.t_id,T.topic,R.rank FROM topics T,ranking R WHERE T.t_id=R.t_id");
        res.status(200).json(jwtTokens(results.rows[0]));
    }
    catch(err){
        console.log(err);
    }

};


const updateRank=async(req,res)=>{

    const topic=req.params.topic;
    const {rank}=req.body;
    if( rank >100 || rank<1)
       return res.status(501).send("bad request");
    if(topic.length==0)
       return res.status(501).send("bad request");   
    
    try{
        const checktopic=  await  pool.query("SELECT * FROM topics WHERE topic=$1 ",[topic]);
        if(!checktopic.rows.length)
            res.send("Topic does not exist");

        try{
            const results =await pool.query(" UPDATE ranking SET rank=$1 WHERE t_id IN (SELECT t_id FROM topics WHERE topic=$2)",[rank,topic]);
            res.status(200).send("succesfully updated");
        }
        catch(err){
            console.log(error);
        }
    }
    catch(err){
        console.log(err);
    }
   

};
module.exports ={
    getDisplay,
    updateRank,
}