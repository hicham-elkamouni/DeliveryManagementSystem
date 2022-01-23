"use strict";
import Delivery from "../models/Delivery.js";

const addDelivery = async (req, res) => {
    let deliveryDetails = req.body;

    let vehicleTypeObj = { vehicleType : "" }

    const weight = deliveryDetails.weight;
    
    if (0 < weight && weight <= 200 ) { // CAR CONDITION
        vehicleTypeObj.vehicleType = "61ec2a8837ec5066e6615491"
    }else if (200 < weight && weight <= 800 ){ // SMALL STRUCK CONDITION
        vehicleTypeObj.vehicleType = "61ec2ab837ec5066e6615493"
    }else if(800 < weight && weight <= 1600 ){ // BIG TRUCK CONDITION
        vehicleTypeObj.vehicleType = "61ec2ba1bfb5bc0c8f63d810"
    }
    
    Object.assign(deliveryDetails, vehicleTypeObj);

    try {
        const delivery = await Delivery.create(deliveryDetails);
        return res.status(201).json({
            status: true,
            message: delivery,
        });
    } catch (err) {
        return res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};

export { addDelivery };
