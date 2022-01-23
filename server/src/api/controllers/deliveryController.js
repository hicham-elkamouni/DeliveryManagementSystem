import Delivery from "../models/Delivery.js";

const addDelivery = async (req, res) => {
    console.log("req body is :",req.body);
    // const { name } = req.body;
    // try {
    //     const vehicleType = await VehicleType.create({ name });
    //     return res.status(201).json({
    //         status: true,
    //         message: vehicleType,
    //     });
    // } catch (err) {
    //     return res.status(400).json({
    //         status: false,
    //         message: err.message,
    //     });
    // }
};

export { addDelivery };
