import jwt from "jsonwebtoken";
const secret = "asdflkj";
import Student from "../models/studentSchema.js";

export default async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        console.log("header >>", header);
        if (!header) {
            res.status(400).json({ message: "no header provided" });
        }

        const token = header.split(" ")[1];
        console.log("token >>", token)
        if (!token) {
            res.status(400).json({ message: "no token provided" });
        }

        const decode = jwt.verify(token, secret);
        console.log("decode >>", decode)
        if (!decode) {
            res.status(400).json({ message: "no token provided" });
        }

        const { id } = decode;
        const user = await Student.findOne({ _id: id })
        console.log("user >>", user)
        if (!user) {
            return res.status(401).json({ message: "no user found" });
        }

        next()


    } catch (error) {
        return res.status(401).json({ message: `token time out ${error} ` });
    }
}w