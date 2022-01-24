import User from "../models/User.js"
import { createToken } from "../helpers";
const logger = require('../../config/winston');

const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    try {
        const doc = await User.findOne({ email })
        if (!doc) {
            return res.status(400).json({
                isLogged: false,
                error: 'User not Found with this email@'
            })
        }
        if (!doc.authenticate(password)) {
            return res.status(401).json({
                isLogged: false,
                error: 'Email and Password dont Match !'
            })
        }
        logger.info(`login: ${doc.email} logged!`);
        const token = createToken({ doc }, doc.role);
        res.cookie('token', token, {
            expires: new Date(Date.now() + 4 * 3600000)
        })
        return token
            ? res.status(200).json({ isLogged: true, token })
            : res.status(500).json({ isLogged: false, error: "cant create token" });

    } catch (err) {
        logger.error(err.message);
    }

}
const logout = (req, res) => {
    res.clearCookie('token');
    res.json({
        message: "Logout"
    })
}
export { login, logout }