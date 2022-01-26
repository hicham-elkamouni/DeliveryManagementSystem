import express from "express";
const router = express.Router();

import { logout, login, createDelivery, removeDelivery , getDelivery} from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";



router.post("/login", login);
router.get("/logout", logout);


// DELIVERY
router.post("/createDelivery", createDelivery);
router.get("/getDelivery/:id", getDelivery);
router.delete("/removeDelivery/:id", removeDelivery);
router.delete("/removeDelivery/:id", removeDelivery);


export { router };



// GETTING ONE DELIVERY
// ADDING DELIVERY
// GETTING ALL DELIVERIES
// REMOVING DELIVERY
// REMOVING ALL DELIVERY
// UPDATING DELIVERY