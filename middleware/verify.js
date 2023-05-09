const jwt=require('jsonwebtoken');
const { jwtSecret } = require("../config")
const db = require("../DB/dbConnection");
module.exports=async(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token)
    {
        const error=new Error("invalid user")
        error.status=400;
        return next(error);
    }
    
    //  verify the token
    const { id } = jwt.verify(token, jwtSecret);
    
    const user=  await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if(!user){
        const error=new Error("unauthorized user")
        error.status=403;
        return next(error);
    }
    // console.log(user);
    req.user=user;
    next();
    }