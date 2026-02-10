import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing");
}

if (!process.env.JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is missing");
}

export const env = {
  PORT: process.env.PORT || "5000",
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET as Secret,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d"
};
