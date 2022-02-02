import express from "express";
import expressvalidator from "express-validator";
import cookieParser from "cookie-parser";
require("dotenv").config();
import connectDB from "./src/config/db";
import cors from "cors";
import { adminRouter, managerRouter , deliveryManagerRouter, driverRouter } from "./src/api/routes";

const host = process.env.host;
const port = process.env.port;

const app = express();

app.use(cors())
app.use(express.json());
app.use(expressvalidator());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", adminRouter);
app.use("/api/manager", managerRouter);
app.use("/api/deliveryManager", deliveryManagerRouter);
app.use("/api/driver", driverRouter);

app.listen(port, () => {
  console.log(`Running on http://${host}:${port}`);
});
connectDB();