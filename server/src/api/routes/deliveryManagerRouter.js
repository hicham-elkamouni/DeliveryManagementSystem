import express from "express";
const router = express.Router();

import { logout, login, addDelivery, deleteDelivery } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";



router.post("/login", login);
router.get("/logout", logout);


// DELIVERY
router.post("/addDelivery", addDelivery);
router.delete("/deleteDelivery", deleteDelivery);
// router.post("/deleteDelivery", deleteDelivery);
// router.post("/deleteDelivery", deleteDelivery);
// router.post("/deleteDelivery", deleteDelivery);


export { router };



// GETTING ONE DELIVERY
// GETTING ALL DELIVERIES
// ADDIING DELIVERY
// REMOVING DELIVERY
// REMOVING ALL DELIVERY
// UPDATING DELIVERY