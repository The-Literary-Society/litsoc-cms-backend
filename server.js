import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { errorResponserHandler, invalidPathHandler } from "./middleware/errorHandler";

//routes
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running")
})

app.use("/api/users", userRoutes);

app.use(invalidPathHandler);
app.use(errorResponserHandler);

app.listen(process.env.PORT, () => console.log("server is running on port 5000"));