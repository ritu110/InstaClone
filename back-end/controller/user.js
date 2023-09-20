const { User } = require("../model/user");

const create = async (req, res) => {
  console.log(req);
  console.log("hello:", req.body);
  const newUser = new User(req.body);
  try {
    const doc = await newUser.save();
    res.status(200).json(doc);
    console.log(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getData = async (req, res) => {
  const allUsers = await User.find();
  res.status(200).json(allUsers);
};

module.exports = { create, getData };
