"use strict";
import { verifyToken } from "../helpers";

const Auth = (role = "") =>
    async (req, res, next) => {
        const bearer = req?.headers?.authorization;
        if (!bearer) {
            return res.status(401).json({ error: "unauthorized" });
        }
        const token = bearer.split(" ")[1];
        const payload = verifyToken(token, role);
        if (!payload) {
            return res.status(401).json({ error: "unauthenticated" });
        }
        if (payload?.doc?.role == "DELIVERY_MANAGER") {
            console.log("a")
            req.body.createdBy = payload.doc._id
        }
        next();
    };

export { Auth }