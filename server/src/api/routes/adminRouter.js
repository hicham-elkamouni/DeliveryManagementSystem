import express from "express";
const router = express.Router();

import { loginAdmin, logout, signup, remove, createManager, removeManager, getAllManagers, getManager, updateManager, getVehicleType ,getAllVehicleType, addVehicleType, removeVehicleType, updateVehicleType } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

router.post("/login", loginAdmin);
router.get("/logout", logout);
router.post("/signup", signup);
router.delete("/remove/:id", remove);

// MANAGER
router.post("/createManager", Auth("ADMIN"), CreatUserValidator,createManager);
router.get("/getAllManagers", getAllManagers);
router.get("/getManager/:id", Auth("ADMIN"), getManager);
router.delete("/removeManager/:id", Auth("ADMIN"), removeManager);
router.put("/updateManager/:id", Auth("ADMIN"), CreatUserValidator, updateManager);

// VEHICLE TYPE 
router.get("/getVehicleType/:id", getVehicleType);
router.get("/getAllVehicleType", getAllVehicleType);
router.post("/addVehicleType", addVehicleType);
router.delete("/removeVehicleType/:id", removeVehicleType);
router.put("/updateVehicleType/:id", updateVehicleType);

export { router };
