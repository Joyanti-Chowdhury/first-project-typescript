import { Request, Response } from "express"
import { studentService } from "./student.service"


const createStudent =async (req: Request, res: Response) => {

 try {
    const {student : studentData} = req.body
 

 const result = await studentService.createStudentIntoDB(studentData)


    res.status(200).json({
        success: true,
        message: 'Student is created successfully',
        data:result
    })
 } catch (error) {
    console.log(error)
 }
}


export const StudentControllers = {
    createStudent
}