import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {userRouter} from "./routes/userRoute.js"
import { foodRouter } from "./routes/foodRoute.js";

const PORT = 3000;

const URL = "mongodb+srv://admin:root@food-app.ydttdpm.mongodb.net/Oder-Food";

const app = express();

app.use(bodyParser.json()); // Xử lý dữ liệu dạng JSON
app.use(bodyParser.urlencoded({ extended: true })); // Xử lý dữ liệu từ form HTML

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to MERN FOOD APP");
});

app.use("/users", userRouter)
app.use("/foods", foodRouter)


mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`listen to PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
