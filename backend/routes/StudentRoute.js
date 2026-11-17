import express from "express"
import { GetStudent,GetaStudent,CreateStudent,DeleteStudent,UpdateStudent } from "../controllers/StudentController.js"

const studentRoutes = express.Router();

studentRoutes.get("/student",GetStudent);
studentRoutes.get("/student/:id",GetaStudent);
studentRoutes.post("/student",CreateStudent);
studentRoutes.delete("/student/:id",DeleteStudent);
studentRoutes.put("/student/:id",UpdateStudent);

export default studentRoutes
