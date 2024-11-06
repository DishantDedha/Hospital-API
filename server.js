import app from "./app.js";
import dotenv from "dotenv";


dotenv.config();

const port= process.env.PORT || 5008;

app.listen(port,()=>
{
    console.log(`Server is listening at ${port}`);
})