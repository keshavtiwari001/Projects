const userModel = require("../models/userModel");
const hashPassword = require("../helpers/authHelper");
const JWT = require("jsonwebtoken");
const comparePassword = require("../helpers/authHelper");

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // validation
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }

    // check user :
    const existingUser = await userModel.findOne({ email });
    // existing users :
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already exist please login",
      });
    }

    // register user :
    const hashedPassword = await hashPassword(password);

    // save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "user register successfully!",
      user,
    });
  } catch (error) {
    console.log(`Err in auth Controller: ${error}`);
    res.status(500).send({
      success: false,
      message: "Err in registration",
      error,
    });
  }
};

//  -------------- LoginController --------------
// POST  ->

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation ->
    if (!email || !password) {
      return res.send({
        success: false,
        message: "invalid email or password ( login controller )",
      });
    }

    // check user ->
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login SuccesFully !",
      user: {
        name: user.name,
        email: user.email,
        phone: user.address,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(`Err in loginController : ${error}`);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

module.exports = { registerController, loginController };
