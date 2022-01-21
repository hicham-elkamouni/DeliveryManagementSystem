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
        req.body.idSubAdmin = payload.subAdmin?.id;
        req.idCategory = payload.manager?.idCategory;
        next();
    };

export { Auth }