import Admin from "../models/Admin.js"

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    const admin = new Admin(email, password);
    const result = await admin.login();
    if (result) {
        if (result.password == password) {
            res.status(200).json({ result });
            // const token = createToken({ result }, "ADMIN");
            // token
            //   ? res.status(200).json({ token })
            //   : res.status(500).json({ error: "cant create token" });
        } else {
            res.status(200).json({ error: "password incorrect" });
        }
    } else {
        res.status(200).json({ error: "email incorrect" });
    }
};

const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    const admin = new Admin(username, email, password);
    const result = await admin.login();
    console.log(result);
    if (result) {
        res.status(200).json({ result })
    } else {
        res.status(200).json({ error: "email incorrect" });
    }
};

export { loginAdmin, registerAdmin }
