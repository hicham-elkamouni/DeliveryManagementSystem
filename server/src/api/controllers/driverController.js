import User from "../models/User.js"
import Driver from "../models/Driver.js"

const createDriver = async (req, res) => {

    const { username, email, password } = req.body

    try {
        const userData = {
            role: "DRIVER",
            email: email,
            password: password
        }
        const user = new User(userData);
        await user.save()
        // 
        const driverData = {
            username: username,
            user: user._id,
        }
        const driver = new Driver(driverData);
        await driver.save()
        // Send email
        CreateUsermail(
            user.email,
            user.password,
            manager.username
        );
        res.status(201).json({
            status: true,
            message: { user, driver }
        })
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}


const removeDriver = async (req, res) => {
    try {
        const { id } = req.params
        const doc = await Driver.findById({ _id: id })//find the Driver
        // check if exists
        if (doc) {
            // delete
            await doc.remove()
            res.status(200).json({
                status: true,
                message: "Deleted successfuly"
            })
        } else {
            res.status(404).json({
                status: false,
                message: "Not Found"
            })
        }
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}

const getAllDrivers = async (req, res) => {
    try {
        const docs = await Driver.find().populate("user")
        res.status(200).json({
            status: true,
            message: docs
        })
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

const getDriver = async (req, res) => {
    const id = req.params.id
    try {
        const docs = await Driver.findById({ _id: id }).populate("user")
        res.status(200).json({
            status: true,
            message: docs
        })
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

const UpdateDriver = async (req, res) => {
    try {
        var id = req.params.id
        if (req.body.username) {
            const filter = { _id: id }
            await Driver.findOneAndUpdate(filter, req.body);
        }
        if (req.body.email || req.body.password) {
            const doc = await Driver.findById(id)
            const filter = { _id: doc.user }
            await User.findOneAndUpdate(filter, req.body)
        }
        res.status(200).json({
            status: true,
            message: "Updated successfuly"
        })
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}


export {
    createDriver,
    removeDriver,
    getAllDrivers,
    getDriver,
    UpdateDriver
}