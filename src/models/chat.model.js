import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "user",
    },
    title: {
      type: String,
      default: "New Chat",
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const chatModel = mongoose.model("messages", chatSchema);

export default chatModel;
