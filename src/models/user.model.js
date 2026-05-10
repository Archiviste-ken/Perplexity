import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "the username should be unique"],
    required: true,
  },
  password: {
    type: String,
    unique: [true, "the password should be unique"],
    required: true,
    select: false
  }
  
});
