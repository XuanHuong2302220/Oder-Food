import { User } from "../models/userModal.js";

export const getAllUser = async (req, res) => {
  try {
    const data = await User.find({});
    if(data.length == 0){
        return res.status(404).JSON({message: "List none"})
    } 
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById(id);
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    if (JSON.stringify(data) === "{}") {
      return res.status(400).send({ message: "Please Add Invalid" });
    }
    console.log(data);
    const user = await User.create(data);
    return res.send(user);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const editUser = async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    const data = await User.findByIdAndUpdate(id, newData);
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Successfully updated!" }), data;
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    const data = await User.findByIdAndDelete(id, newData);
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Successfully deleted!" }), data;
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
