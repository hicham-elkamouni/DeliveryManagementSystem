import express from "express";
const router = express.Router();

import { loginAdmin, logout, createManager, getVehicleType ,getAllVehicleType, addVehicleType, deleteVehicleType } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

router.post("/login", loginAdmin);
router.get("/logout", logout);
router.post("/createManager", Auth("ADMIN"), CreatUserValidator, createManager);

// VEHICLE TYPE 
router.get("/getAllVehicleType", getAllVehicleType);
router.post("/addVehicleType", addVehicleType);
router.get("/getVehicleType/:id", getVehicleType);
router.delete("/deleteVehicleType/:id", deleteVehicleType);
// router.patch("/updateVehicleType/:id", updateVehicleType);

export { router };
