import mongoose from "mongoose";
import colors from "colors"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database is connected`.bgCyan.white)
    } catch (error) {
        console.log(`error in database connection : ${error}`)

    }
}

export default connectDB