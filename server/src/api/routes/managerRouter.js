import express from "express";
const router = express.Router();

import { login, logout, createDelivery } from "../controllers";

router.post("/login", login);
router.get("/logout", logout);

// CRUD DELIVERY MANAGER
// CRUD DRIVERS
// SEE STATISTICS

// DeliveryManager
router.post("/createDeliveryManager", CreatUserValidator, createDeliveryManager);
router.delete("/removeDeliveryManager/:id", removeDeliveryManager);
router.get("/getAllDeliveryManagers", getAllDeliveryManagers);
router.get("/getDeliveryManager/:id", getDeliveryManager);
router.patch("/UpdateDeliveryManager/:id", UpdateDeliveryManager);

// Driver
router.post("/createDriver", Auth("MANAGER"), CreatUserValidator, createDriver);
router.delete("/removeDriver/:id", removeDriver);
router.get("/getAllDrivers", getAllDrivers);
router.get("/getDriver/:id", getDriver);
router.patch("/updateDriver/:id", UpdateDriver);

// DELIVERY
router.post("/createDelivery", createDelivery);

export { router };
