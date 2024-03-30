import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    decs: { type: String, required: true },
    price: { type: String, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Food = mongoose.model("food", foodSchema);
