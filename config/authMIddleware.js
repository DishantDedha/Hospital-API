import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken= (req,res,next)=>
{
   const authHeader= req.headers.authorization || req.headers.Authorization;

   if(!authHeader || !authHeader.startsWith('Bearer '))
   {
    return res.status(401).json({error: 'A token is required for authentication'});

   }

   // extraction of token
   const token= authHeader.split(" ")[1];

   try {

    const decoded= jwt.verify(token,process.env.JWT_SECRET);
    req.user= decoded;
    next();
    
   } catch (error) {
    return res.status(401).json({ error: 'Invalid Token' });
   }


};


export default verifyToken;