import express from "express";
const router = express.Router();

import { logout, login } from "../controllers";

import { CreatUserValidator, Auth } from "../middlewares";

router.post("/login", login);
router.get("/logout", logout);


export { router };
