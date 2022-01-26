import express from "express";
const router = express.Router();

import { login, logout, createDeliveryManager, removeDeliveryManager, getAllDeliveryManagers, getDeliveryManager, updateDeliveryManager, createDriver, removeDriver, getAllDrivers, getDriver , updateDriver , createDelivery } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

// Authentication
router.post("/login", login);
router.get("/logout", logout);

// DeliveryManager
router.get("/getAllDeliveryManagers", getAllDeliveryManagers);
router.post("/createDeliveryManager", CreatUserValidator, createDeliveryManager);
router.get("/getDeliveryManager/:id", getDeliveryManager);
router.delete("/removeDeliveryManager/:id", removeDeliveryManager);
router.put("/updateDeliveryManager/:id", updateDeliveryManager);

// Driver
router.post("/createDriver", Auth("MANAGER"), CreatUserValidator, createDriver);
router.delete("/removeDriver/:id", removeDriver);
router.get("/getAllDrivers", getAllDrivers);
router.get("/getDriver/:id", getDriver);
router.put("/updateDriver/:id", updateDriver);

// DELIVERY
router.post("/createDelivery", createDelivery);

export { router };
