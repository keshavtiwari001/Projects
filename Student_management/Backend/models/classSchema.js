import { json } from "express";
import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    // batch name, timing, duration, subjects, fee, weekOff, num of seat .
    batchName: { type: String, required: true },
    timing: { type: String, required: true },
    duration: { type: Number, required: true },
    subjects: { type: [String], required: true },
    fee: { type: Number, required: true },
    weekOff: { type: { json } },
    totalSeats: { type: Number, required: true },
}, { timestamps: true, versionKey: false })

const Class = mongoose.model('Class', classSchema)
export default Class