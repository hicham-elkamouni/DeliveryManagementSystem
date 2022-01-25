import express from "express";
const router = express.Router();

import { logout, login, createDelivery, removeDelivery } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";



router.post("/login", login);
router.get("/logout", logout);


// DELIVERY
router.post("/createDelivery", createDelivery);
router.delete("/removeDelivery", removeDelivery);


export { router };



// GETTING ONE DELIVERY
// GETTING ALL DELIVERIES
// ADDING DELIVERY
// REMOVING DELIVERY
// REMOVING ALL DELIVERY
// UPDATING DELIVERY