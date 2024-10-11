import User from "../models/userSchema.js"
import JWT from "jsonwebtoken"
import bcrypt from "bcrypt"
const secret = "asdfoiu"

// sign UP user 
export const userSignup = async (req, res) => {

    const data = req.body
    console.log(`>>>>data>>>>>`, data);

    const { name, email, password, phone, role } = req.body;

    // validation 

    if (!name) {
        return res.status(400).json({ error: "Name is required!" });
    }
    if (!email) {
        return res.status(400).json({ error: "email is required!" });
    }
    if (!password) {
        return res.status(400).json({ error: "password is required!" });
    }
    if (!phone) {
        return res.status(400).json({ error: "phone is required!" });
    }
    if (!role) {
        return res.status(400).json({ error: "role is required!" });
    }

    const existinguser = await User.findOne({ email });
    if (existinguser) {
        console.log(" user already exist, please login !! ");
        return res.status(400).json({
            message: "user already exist, please login !!",
        })
    }

    // making password more secure 
    const salt = bcrypt.genSaltSync(10); // salt
    const hash = bcrypt.hashSync(password, salt); // hash

    console.log(data)
    const newUser = new User({ name, email, password: hash, phone, role });
    await newUser.save();
    res.status(201).json({
        success: true,
        message: "user created successfully !",
        newUser
    })

}


// Log in user 
export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ error: "email is required!" });
    }
    if (!password) {
        return res.status(400).json({ error: "password is required!" });
    }

    const existinguser = await User.findOne({ email });
    if (existinguser) {
        // getting role from database
        var userRole = existinguser.role;
        console.log("user role >>>", userRole)
    }
    if (!existinguser) {
        res.status(400).json({
            message: "user not registered, please signUp !!"
        })
    }


    // password varify / compare while login...
    const match = await bcrypt.compare(password, existinguser.password)
    if (!match) {
        return res.status(400).json({ message: "invalid password !" })
    }

    const token = JWT.sign({ id: existinguser._id }, secret, { expiresIn: "7d" });
    console.log('token>>>', token);

    return res.status(200).json({ token, existinguser, userRole });

}