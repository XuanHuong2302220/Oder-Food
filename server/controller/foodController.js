import { Food } from "../models/foodModal.js";

export const getAllFood = async (req, res) => {
  try {
    const data = await Food.find({});
    if(data.length == 0){
      return res.status(404).json({message: "List none"})
  } 
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFood = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Food.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Food not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFood = async (req, res) => {
  try {
    const data = req.body;
    if (JSON.stringify(data) === "{}") {
      return res.status(400).send({ message: "Please Add Invalid" });
    }
    console.log(data);
    const food = await Food.create(data);
    return res.send(food);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const editFood = async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    const data = await Food.findByIdAndUpdate(id, newData);
    if (!data) {
      return res.status(404).json({ message: "Food not found" });
    }
    return res.status(200).json({ message: "Successfully updated!" }), data;
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    const data = await Food.findByIdAndDelete(id, newData);
    if (!data) {
      return res.status(404).json({ message: "Food not found" });
    }
    return res.status(200).json({ message: "Successfully deleted!" }), data;
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
