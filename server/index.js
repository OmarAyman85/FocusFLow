import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, {
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => console.log("Database connected"));

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
