import express from "express";
const router = express.Router();

import { loginAdmin, logout, createManager, getVehicleType } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

router.post("/login", loginAdmin);
router.get("/logout", logout);
router.post("/createManager", Auth("ADMIN"), CreatUserValidator, createManager);
router.get("/getVehicleType", getVehicleType);

export { router };
