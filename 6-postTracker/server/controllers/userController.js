import User from "../models/userModal.js";

export const createUser = (req, res) => {
  const { username } = req.body;

  const newUser = new User({ username })
    .save()
    .then(() => {
      res.status(201).json({ success: true, message: "User created successfully", data: username });
    })
    .catch((err) => console.log(err));
};

export const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({ success: true, users: users });
    })
    .catch((err) => console.log(err));
};
