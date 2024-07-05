import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import shortRoute from "./routes/shortRoute.js";
dotenv.config();
connectDB();

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", shortRoute);

app.listen(port, () => {
  console.log(`Server started successfully on port: ${port}`);
});
