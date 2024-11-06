import Report from "../models/reportModel.js";

export const createReport= async(req,res)=>
{
    const {status}= req.body;
    const doctorId=req.user.id;
    const patientId=req.params.id;

    try {
        const report= new Report({createdBY:doctorId,patient:patientId,status});
             await report.save();

             res.status(201).send(report);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({message:"There is an error creating report"})
        
    }
};

export const getAllReportsByPtient= async(req,res)=>
{
      const patientId=req.params.id;
    try {
          const Reports= await Report.find({patient:patientId}).sort({date:1});

           res.send(Reports);

    } catch (error) {
        res.status(500).json({message:"there is an error getting reports"});
    }
};

export const getReportsByStatus= async(req,res)=>
{
    const {status}= req.params;

    try {
          const Reports= await Report.find({status});
            res.send(Reports);

    } catch (error) {
        res.status(500).json({message:"there is an error getting reports"});
    }
}