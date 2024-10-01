import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    // name, email, phone, address, qualification, fee, gender, roll No, batch ?, Join date.

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
    qualification: {
        type: String, required: true
    },
    fee: {
        type: Number, required: true
    },
    gender: {
        type: String, required: true, enum: ['male', 'female', 'other']
    },
    rollNo: {
        type: String, required: true, unique: true
    },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    joinDate: {
        type: Date, default: Date.now
    },
    password: {
        type: String, required: true
    }

}, { timestamps: true, versionKey: false })
const Student = mongoose.model('students', studentSchema)
export default Student