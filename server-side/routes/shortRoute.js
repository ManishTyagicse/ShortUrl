import express from "express";
import {
  createURL,
  deleteURL,
  getALLURL,
  getURL,
} from "../controllers/shortURLController.js";

const route = express.Router();

route.post("/shortURL", createURL);
route.get("/shortURL", getALLURL);
route.get("/shortURL/:id", getURL);
route.delete("/shortURL/:id", deleteURL);

export default route;
