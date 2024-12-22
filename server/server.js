import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

//environment variables
dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();


app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Focus Flow Backend is running!");
});

//error middleware
// Catch-all for undefined routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.statusCode = 404;
  next(error); // Forward to error handler
});

app.use(errorMiddleware);

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
