const User = require("../models/user");
const colors = require("colors");
const bcrypt = require("bcrypt");
const { sign } = require("crypto");
const jwt = require("jsonwebtoken");
const secret = "erewurtyuvmnhgfalkdoiqwptyhgfjmzxnal";

exports.createUser = async (req, res) => {
  const { email, password, name } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "user already exists" });
  }
  const data = req.body;
  const user = new User(data);
  user.save();
  res.status(201).json(user);
};

exports.getUsers = async (req, res) => {
  const data = await User.find();
  res.status(201).json(data);
};

exports.updateUser = async (req, res) => {
  const data = req.body;
  const { id } = req.params.id;
  const user = await User(data);
  const existingUser = await User.findByIdAndUpdate(id, data);
  if (!existingUser) {
    return res.status(400).json({ message: "user not exits" });
  }
  await user.save();
  res.status(201).json(user);
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.status(201).json({ message: "user deleted successfully !!", user });
  } catch (error) {
    console.error("error deleting User ", error);
    return res.status(500).json({ message: "internal server error" });
  }
};

exports.signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const salted = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salted);

    if (!(email && password && name)) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already created" });
    }
    const data = { name, email, password: hash };
    const user = new User(data);
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    console.log("error in signup : ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password, name } = req.body;
  if (!(email && password)) {
    return res.status(400).json({ message: "all fields are required" });
  }
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ message: "user not exist! please login" });
  }

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) {
    return res.status(400).json({ message: "invalid password or email!" });
  }

  const token = jwt.sign(
    { id: existingUser.id },
    secret
    // { expiresIn: "1h" }
  );
  console.log(`....... token ==== ${token}`.bgBlue.white);
  res.status(200).json({ token, existingUser });
};
