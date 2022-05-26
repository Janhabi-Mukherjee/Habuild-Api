const jwt=require('jsonwebtoken');

const authenticateToken=async(req,res,next)=>{

    const authHeader=req.headers['autharization'];//Bearer Token
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
       return res.status(501).send('Token not provided');
    }
    try{
        const decoded= jwt.verify(authHeader,process.env.ACCESS_TOKEN_SECRET);
        req.user=user;
        next();
    }
    catch(err){
       return res.status(501).send('Authentication Failed');
    }
};

exports.module= authenticateToken;