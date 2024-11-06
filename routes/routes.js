import express from "express";
import { registerDoctor,loginDoctor } from "../controllers/doctorController.js";
import { registerOrFind } from "../controllers/patientController.js";
import { createReport,getAllReportsByPtient,getReportsByStatus } from "../controllers/reportController.js";
import verifyToken from "../config/authMIddleware.js";



const router= express.Router();

//doctor Routes
router.post('/doctors/register',registerDoctor);
router.post('/doctors/login',loginDoctor);

// patient Routes

router.post('/patients/register', verifyToken, registerOrFind);
router.post('/patients/:id/create_report', verifyToken, createReport);
router.get('/patients/:id/all_reports', verifyToken,getAllReportsByPtient);

// Report routes
router.get('/reports/:status', verifyToken, getReportsByStatus);



export default router;  
