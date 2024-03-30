import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: Number, required: true, enum: [0, 1] },
    address: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);


export const User =  mongoose.model("user", userSchema);
