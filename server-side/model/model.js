import mongoose from "mongoose";
import { nanoid } from "nanoid";
import express from "express";

const shortURLSchema = new mongoose.Schema(
  {
    fullURL: {
      type: String,
      required: true,
    },
    shortURL: {
      type: String,
      required: true,
      default: () => nanoid().substring(0, 10),
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const shortURLModel = mongoose.model("ShortUrl", shortURLSchema);
