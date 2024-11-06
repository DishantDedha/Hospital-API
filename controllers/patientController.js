
import Patient from "../models/patientModel.js";

export const registerOrFind = async(req,res)=>
{
    const {name,phone}= req.body;
    try{
        const existingPatient= await Patient.findOne({phone});
        if(existingPatient)
        {
            return res.send(existingPatient);
        }
        const newPatient= new Patient({name,phone});
        await newPatient.save();

        res.status(201).send(newPatient);
    }
    catch(error)
    {
        res.status(500).json({message:"Error with patient"})
    }
}