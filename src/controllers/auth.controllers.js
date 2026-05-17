import userModel from "../models/user.model.js";

export async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [username, email],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message:
        "User with this email or username already exists, Log In to continue",
      success: false,
      err: "User already exists",
    });
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });
}
