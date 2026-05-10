import mongoose from "mongoose";

async function connectDB() {
  mongoose.connnect(process.env.MONGO_URI).then(() => {
    console.log("connected to the db");
  });
}

export default connectDB;
