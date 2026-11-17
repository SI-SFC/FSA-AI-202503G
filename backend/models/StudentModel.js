import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    Name: String,
    Age: Number
})

const students = mongoose.model("students",studentSchema);

export default students
