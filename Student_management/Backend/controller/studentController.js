import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const secret = "asdflkj"

import Student from "../models/studentSchema.js"
import { response } from "express";

export const createStudent = async (req, res) => {
    try {

        const { name, email, phone, address, fee, gender, qualification, rollNo } = req.body;
        // validation
        if (!name) {
            return res.send({ message: "Name is required!" });
        }
        if (!email) {
            return res.send({ message: "email is required!" });
        }
        if (!qualification) {
            return res.send({ message: "qualification is required!" });
        }
        if (!phone) {
            return res.send({ message: "phone is required!" });
        }
        if (!address) {
            return res.send({ message: "address is required!" });
        }
        if (!fee) {
            return res.send({ message: "fee is required!" });
        }
        if (!gender) {
            return res.send({ message: "gender is required!" });
        }
        if (!rollNo) {
            return res.send({ message: "rollNo is required!" });
        }

        const data = req.body
        console.log(data)

        // existing user
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(200).send({
                success: false,
                message: "student exists. Please login !!",
            });
        }

        const newuser = Student(req.body)
        await newuser.save()
        res.status(201).send({
            success: true,
            message: "student registered successfully",
            newuser,
        });


    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error,
        })
    }
}

export const getStudents = async (req, res) => {
    const student = await Student.find();
    res.status(200).send({
        student,
    });
}

export const getStudentid = async (req, res) => {
    const stID = req.params.id
    const student = await Student.findById(stID);
    if (!(student)) {
        res.status(400).send({ message: "student not exist !!" })
    }
    res.status(200).send({
        student,
    });
}

export const updateUser = async (req, res) => {
    const stID = req.params.id
    const data = req.body
    const updatedData = await Student.findByIdAndUpdate(stID, data);
    console.log(data)
    res.status(201).json({
        success: true,
        updatedData
    })

}

export const deleteUser = async (req, res) => {
    const stID = req.params.id
    const deletedUser = await Student.findByIdAndDelete(stID);
    console.log(deletedUser)
    res.status(201).json({
        success: true,
        message: "user deleted Successfully ",
        "Deleted User ": deletedUser
    })

}

// sign UP student 
export const studentSignup = async (req, res) => {

    const { email, rollNo, password, phone, address, qualification, fee, gender, name } = req.body;

    // validation
    if (!(email && password && rollNo)) {
        res.status(400).json({
            error: "all fields are required !!"
        })
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
        res.status(400).json({
            message: "Student already exist, please login !!"
        })
    }

    // making password more secure 
    const salt = bcrypt.genSaltSync(10); // salt
    const hash = bcrypt.hashSync(password, salt); // hash

    const data = { email, rollNo, password: hash, phone, address, qualification, fee, gender, name };
    console.log(data)
    const newST = new Student(data);
    await newST.save();
    res.status(201).json({
        success: true,
        message: "user created successfully !",
        newST
    })

}


// Log in student 
export const studentLogin = async (req, res) => {
    const { email, rollNo, password } = req.body;

    if (!(email && rollNo, password)) {
        res.status(400).json({
            error: "all fields are required !!"
        })
    }

    const existingStudent = await Student.findOne({ email });
    if (!existingStudent) {
        res.status(400).json({
            message: "Student not registered, please sign up !!"
        })
    }

    // password varify / compare while login...
    const match = await bcrypt.compare(password, existingStudent.password)
    if (!match) {
        return res.status.json({ message: "invalid password !" })
    }

    const token = jwt.sign({ id: existingStudent._id }, secret, { expiresIn: "7d" });
    console.log('token>>>', token);

    res.json({ token, existingStudent });

}