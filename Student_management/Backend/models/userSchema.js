import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required:true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'teacher', 'admin']
    }

}, { timestamps: true, versionKey: false })

export default mongoose.model('users', userSchema)
