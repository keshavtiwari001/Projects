
import Class from "../models/classSchema.js"
import Teacher from "../models/teacherSchema.js"

export const createTeacher = async (req, res) => {
    try {

        const { name, email, phone, address, gender, qualification, salary, batchName, experience, role, timing, technology, joinDate } = req.body;
        // // validation
        // if (!name) {
        //     return res.send({ message: "Name is required!" });
        // }
        // if (!email) {
        //     return res.send({ message: "email is required!" });
        // }
        // if (!qualification) {
        //     return res.send({ message: "qualification is required!" });
        // }
        // if (!phone) {
        //     return res.send({ message: "phone is required!" });
        // }
        // if (!address) {
        //     return res.send({ message: "address is required!" });
        // }
        // if (!gender) {
        //     return res.send({ message: "gender is required!" });
        // }
        // if (!salary) {
        //     return res.send({ message: "salary is required!" });
        // }
        // if (!experience) {
        //     return res.send({ message: "experience is required!" });
        // }
        // if (!role) {
        //     return res.send({ message: "roll is required!" });
        // }
        // if (!timing) {
        //     return res.send({ message: "timing is required!" });
        // }
        // if (!technology) {
        //     return res.send({ message: "technology is required!" });
        // }
        // if (!empID) {
        //     return res.send({ message: "employe id is required!" });
        // }
        // if (!password) {
        //     return res.send({ message: "password is required!" });
        // }


        const data = req.body
        console.log(data)

        // existing user
        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
            return res.status(200).send({
                success: false,
                message: "Teacher exists. Please login !!",
            });
        }

        // batch matching - populate()
        // const batchname = 

        const newuser = new Teacher(req.body)
        await newuser.save()
        res.status(201).send({
            success: true,
            message: "Teacher registered successfully",
            newuser,
        });


    } catch (error) {
        console.log("err in registering the teacher : >>", error)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error,
        })
    }
}

//  get trainers
export const getTeachers = async (req, res) => {
    const teacher = await Teacher.find();
    res.status(200).json(teacher);
}

export const getTeacherid = async (req, res) => {
    const teacherID = req.params.id
    const teacher = await Teacher.findById(teacherID);
    if (!(teacher)) {
        res.status(400).send({ message: "Teacher not exist !!" })
    }
    res.status(200).send(teacher);
}

export const updateUser = async (req, res) => {
    const teacherID = req.params.id
    const data = req.body
    const updatedData = await Teacher.findByIdAndUpdate(teacherID, data);
    console.log(data)
    res.status(201).json({
        success: true,
        updatedData
    })

}

export const deleteUser = async (req, res) => {
    const teacherID = req.params.id
    const deletedUser = await Teacher.findByIdAndDelete(teacherID);
    console.log(deletedUser)
    res.status(201).json({
        success: true,
        message: "Teacher deleted Successfully ",
        "Deleted User ": deletedUser
    })

}

// // sign UP Teacher
// export const teacherSignup = async (req, res) => {

//     const { name, email, phone, address, gender, qualification, salary, experience, role, timing, technology, empID, password } = req.body;

//     // validation
//     if (!(email && password)) {
//         res.status(400).json({
//             error: "all fields are required !!"
//         })
//     }

//     const existingTeacher = await Teacher.findOne({ email });
//     if (existingTeacher) {
//         res.status(400).json({
//             message: "Teacher already exist, please login !!"
//         })
//     }

//     // making password more secure
//     const salt = bcrypt.genSaltSync(10); // salt
//     const hash = bcrypt.hashSync(password, salt); // hash

//     const data = { name, email, phone, address, gender, qualification, salary, experience, role, timing, technology, empID, password: hash };
//     console.log(data)
//     const newTeacher = new Teacher(data);
//     await newTeacher.save();
//     res.status(201).json({
//         success: true,
//         message: "Teacher created successfully !",
//         newTeacher
//     })

// }


// // Log in Teacher
// export const teacherLogin = async (req, res) => {
//     const { email, password } = req.body;

//     if (!(email && password)) {
//         res.status(400).json({
//             error: "all fields are required !!"
//         })
//     }

//     const existingTeacher = await Teacher.findOne({ email });
//     if (!existingTeacher) {
//         res.status(400).json({
//             message: "Teacher not registered, please sign up !!"
//         })
//     }

//     // password varify / compare while login...
//     const match = await bcrypt.compare(password, existingTeacher.password)
//     if (!match) {
//         return res.status(401).json({ message: "invalid password !" })
//     }

//     const token = jwt.sign({ id: existingTeacher._id }, secret, { expiresIn: "7d" });
//     console.log('token>>>', token);

//     res.json({ token, existingTeacher });

// }