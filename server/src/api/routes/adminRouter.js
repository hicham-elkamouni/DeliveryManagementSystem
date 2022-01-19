import express from "express";
const router = express.Router();


import { loginAdmin, registerAdmin } from "../controllers"

router.post("/login", loginAdmin)
router.post("/register", registerAdmin)

export { router }