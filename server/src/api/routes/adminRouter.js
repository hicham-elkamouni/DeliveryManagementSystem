import express from "express";
const router = express.Router();

import { loginAdmin, logout, createManager, removeManager, getAllManagers, getManager, updateManager, getVehicleType ,getAllVehicleType, addVehicleType, removeVehicleType, updateVehicleType } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

router.post("/login", loginAdmin);
router.get("/logout", logout);

// MANAGER
router.get("/createManager", Auth("ADMIN"), CreatUserValidator, createManager);
router.get("/removeManager", Auth("ADMIN"), CreatUserValidator, removeManager);
router.post("/getAllManagers", Auth("ADMIN"), CreatUserValidator, getAllManagers);
router.delete("/getManager", Auth("ADMIN"), CreatUserValidator, getManager);
router.put("/updateManager", Auth("ADMIN"), CreatUserValidator, updateManager);

// VEHICLE TYPE 
router.get("/getVehicleType/:id", getVehicleType);
router.get("/getAllVehicleType", getAllVehicleType);
router.post("/addVehicleType", addVehicleType);
router.delete("/removeVehicleType/:id", removeVehicleType);
router.put("/updateVehicleType/:id", updateVehicleType);

export { router };
