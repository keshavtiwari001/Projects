import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    // batch name, timing, duration, subjects, fee, weekOff, num of seat .
    batchName: { type: String, required: true },
    timing: { type: String, required: true },
    duration: { type: Number, required: true },
    subjects: { type: [String], required: true },
    fee: { type: Number, required: true },
    weekOff: { type: [String], required: true, },
    numOfSeat: { type: Number, required: true },
})

const Class = mongoose.model('Class', classSchema)
export default Class