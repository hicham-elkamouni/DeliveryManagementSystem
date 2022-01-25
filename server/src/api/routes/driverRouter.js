import express from "express";
const router = express.Router();

import { logout, login, addDelivery, deleteDelivery } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

// GETTING ASSIGNED DELIVERY
// SHOW DELIVERIES BASED ON HIS VEHICLE TYPE IF ONLY HE DON'T HAVE ONE
// ACCEPTING DELIVERY



router.post("/login", login);
router.get("/logout", logout);






export { router };

