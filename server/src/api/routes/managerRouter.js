import express from "express";
const router = express.Router();

import { login, logout, addDelivery } from "../controllers";

router.post("/login", login);
router.get("/logout", logout);

// CRUD DELIVERY MANAGER
// CRUD DRIVERS
// SEE STATISTICS

// DELIVERY
router.post("/addDelivery", addDelivery);

export { router };
