import express from "express";
const router = express.Router();

import { signup ,loginAdmin, logout, createManager, getVehicleType ,getAllVehicleType, addVehicleType, deleteVehicleType, updateVehicleType, addDelivery } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";


router.post("/signup", signup);
router.post("/login", loginAdmin);
router.get("/logout", logout);
router.post("/createManager", Auth("ADMIN"), CreatUserValidator, createManager);

// VEHICLE TYPE 
router.get("/getAllVehicleType", getAllVehicleType);
router.post("/addVehicleType", addVehicleType);
router.get("/getVehicleType/:id", getVehicleType);
router.delete("/deleteVehicleType/:id", deleteVehicleType);
router.put("/updateVehicleType/:id", updateVehicleType);

export { router };
