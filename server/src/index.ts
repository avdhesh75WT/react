import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import connectToDatabase from "./database";
import authRoutes from "./routes/auth";

const app: Express = express();
connectToDatabase();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}!`)
);
