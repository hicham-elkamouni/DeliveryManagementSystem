import express from "express";
const router = express.Router();

import { login, logout, createDeliveryManager, removeDeliveryManager, getAllDeliveryManagers, getDeliveryManager, updateDeliveryManager, createDriver, removeDriver, getAllDrivers, getDriver , updateDriver , createDelivery } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

// Authentication
router.post("/login", login);
router.get("/logout", logout);

// DeliveryManager
router.post("/createDeliveryManager", CreatUserValidator, createDeliveryManager);
router.delete("/removeDeliveryManager/:id", removeDeliveryManager);
router.get("/getAllDeliveryManagers", getAllDeliveryManagers);
router.get("/getDeliveryManager/:id", getDeliveryManager);
router.patch("/updateDeliveryManager/:id", updateDeliveryManager);

// Driver
router.post("/createDriver", Auth("MANAGER"), CreatUserValidator, createDriver);
router.delete("/removeDriver/:id", removeDriver);
router.get("/getAllDrivers", getAllDrivers);
router.get("/getDriver/:id", getDriver);
router.patch("/updateDriver/:id", updateDriver);

// DELIVERY
router.post("/createDelivery", createDelivery);

export { router };
