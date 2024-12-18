import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//environment variables
dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Focus Flow Backend is running!");
});

//Initialize the database and the server
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
