import mongoose from "mongoose";
import bcrypt from "bcrypt";

const doctorSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        
        }
    }
);

// function for hashing password

doctorSchema.pre('save', async function(next){
if(!this.isModified('password') )return next();

this.password= await bcrypt.hash(this.password,10);
next();
});


// function for comparing passwords

doctorSchema.methods.comparePassword= async function(password)
{
    return await bcrypt.compare(password,this.password);
};

const Doctor= mongoose.model('Doctor',doctorSchema);


export default Doctor;


