import mongoose from "mongoose"

const teacherSchema = new mongoose.Schema({
    // name, email, phone, address, qualification, salary, batch Name, experience, role, timing, technology, Join date, employe ID, 
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true, validate: /@/
    },
    phone: {
        type: String, required: true
    },
    address: {
        type: String, required: true
    },
    gender: {
        type: String, required: true, enum: ['male', 'female', 'other']
    },
    qualification: {
        type: String, required: true
    },
    salary: {
        type: Number, required: true
    },
    batchName: {
        type: mongoose.Schema.Types.ObjectId, ref: "Class"
    },
    experience: {
        type: Number, required: true
    },
    role: {
        type: String, required: true,
    },
    timing: {
        type: String, required: true
    },
    technology: {
        type: [String], required: true
    },
    joinDate: {
        type: Date, default: Date.now
    },
    empID: {
        type: String, unique: true
    },
}, { timestamps: true, versionKey: false });

const Teacher = mongoose.model('teachers', teacherSchema)
export default Teacher