import Doctor from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";


dotenv.config();


export const registerDoctor= async(req,res)=>{
    const{ username,password}=req.body;

    try{
          const doctor=  new Doctor({username,password});

          await doctor.save();
          res.status(201).send({ message: 'Doctor registered successfully' });

    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({messsage:"not able to register doctor"});
    }
    }


    export const loginDoctor= async(req,res)=>{
        const {username,password}= req.body;

        try{
             const doctor= await Doctor.findOne({username});
             if (!doctor || !(await doctor.comparePassword(password))) {
                return res.status(401).send({ message: 'Invalid credentials' });
              }
 
                   const token= jwt.sign({id:doctor._id},process.env.JWT_SECRET,{expiresIn:"1h"});
                   res.status(200).send({token});             

        }catch(error)
        {
            res.status(500).json({messsage:"not able to login doctor"});
        }
    }
