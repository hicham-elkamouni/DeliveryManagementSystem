import express from "express";
const router = express.Router();

import { logout, login, createDelivery, removeDelivery , getDelivery, getAllDeliveries} from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";



router.post("/login", login);
router.get("/logout", logout);


// DELIVERY
router.get("/getAllDeliveries", getAllDeliveries);
router.post("/createDelivery", createDelivery);
router.get("/getDelivery/:id", getDelivery);
router.delete("/removeDelivery/:id", removeDelivery);
// router.delete("/updateDelivery/:id", updateDelivery);


export { router };
