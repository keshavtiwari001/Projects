import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const secret = "asdflkj"

import Class from "../models/classSchema.js"

export const createClass = async (req, res) => {
    try {

        const { batch, timing, duration, subjects, fee, weekOff, totalSeats } = req.body;
        // validation

        if (!batch) {
            return res.send({ message: "batch is required!" });
        }
        if (!timing) {
            return res.send({ message: "timing is required!" });
        }
        if (!subjects) {
            return res.send({ message: "subjects is required!" });
        }
        if (!fee) {
            return res.send({ message: "fee is required!" });
        }
        if (!totalSeats) {
            return res.send({ message: "totalSeats is required!" });
        }
        if (!duration) {
            return res.send({ message: "duration is required!" });
        }
        if (!weekOff) {
            return res.send({ message: "weekOff is required!" });
        }


        const data = req.body
        console.log(data)

        // existing class
        const existingClass = await Class.findOne({ batch });
        if (existingClass) {
            return res.status(200).send({
                success: false,
                message: "This Class exists. Please choose another name !!",
            });
        }

        const newClass = Class(req.body)
        await newClass.save()
        res.status(201).send({
            success: true,
            message: "Class created successfully",
            newClass,
        });


    } catch (error) {
        console.log("err in creating the Class : >>", error)
        res.status(500).send({
            success: false,
            message: "Error in Creating the class",
            error,
        })
    }
}

export const getClasss = async (req, res) => {
    const Class = await Class.find();
    res.status(200).send({
        Class,
    });
}

export const getClassid = async (req, res) => {
    const ClassID = req.params.id
    const Class = await Class.findById(ClassID);
    if (!(Class)) {
        res.status(400).send({ message: "Class not exist !!" })
    }
    res.status(200).send({
        Class,
    });
}

export const updateClass = async (req, res) => {
    const ClassID = req.params.id
    const data = req.body
    const updatedData = await Class.findByIdAndUpdate(ClassID, data);
    console.log(data)
    res.status(201).json({
        success: true,
        updatedData
    })

}

export const deleteClass = async (req, res) => {
    const ClassID = req.params.id
    const deletedClass = await Class.findByIdAndDelete(ClassID);
    console.log(deletedClass)
    res.status(201).json({
        success: true,
        message: "Class revoved Successfully ",
        "removed class ": deletedClass
    })

}
