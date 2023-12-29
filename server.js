import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";
import { errorResponserHandler, invalidPathHandler } from "./middleware/errorHandler";
import path from 'path';

//routes
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";
import PostCategories from "./models/PostCategories";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get("/", (req, res) => {
    res.send("Server running")
})

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/postCategories", PostCategories);

app.use('/uploads',express.static(path.join(__dirname,"/uploads"))); 

app.use(invalidPathHandler);
app.use(errorResponserHandler);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
