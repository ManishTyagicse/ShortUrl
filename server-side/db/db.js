import mongoose from "mongoose";
import express from "express";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
    console.log("DataBase connection successful");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
