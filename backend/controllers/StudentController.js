import students from "../models/StudentModel.js";
export const GetStudent = async (req,res)=>{
    const std = await students.find();
    res.status(200).send(std)
}

export const GetaStudent = async (req,res)=>{
    const id = req.params.id
    const std = await students.findById(id)
    if(!std){
        res.status(404).json({"message":"Student Not Found"})
    }
    res.status(200).json(std);
}

export const CreateStudent = async(req,res)=>{
    const { Name,Age } = req.body
    const newstd = new students ({
        Name:Name,
        Age:Age
    })
    await newstd.save();
    return res.status(201).json({message:"New Student Added", newstd})
}
 
export const DeleteStudent = async (req,res)=>{
    const dltUser = await students.findByIdAndDelete(req.params.id)
    if(!dltUser){
        res.status(404).json({message:"Student not Found"})
    }
    res.status(200).json({message:"Student Deleted",dltUser})
}

export const UpdateStudent = async (req,res)=>{
    const updstudent = await students.findByIdAndUpdate(req.params.id,req.body)
    if(!updstudent){
        res.status(404).json({message:"Student not Found"})
    }
    res.status(200).json({message:"Student Updated Successfully",updstudent})
}
