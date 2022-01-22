import VehicleType from "../models/VehicleType.js";
import User from "../models/User.js";

const getAllVehicleType = async (req, res) => {

    try {
        const docs = await VehicleType.find({name:"car"});
        return res.status(200).json({
            success : true,
            results : docs
        })
    }catch(err){
        return res.status(400).json({
            success : false,
            error: err.message
        })
    }
    
}

const addVehicleType = async (req, res) => {

    try{
        const { name } = req.body  
        const vehicleType = await VehicleType.create({ name });
        return res.status(201).json({
            success : true,
            results : vehicleType
        })
    }catch(err){
        return res.status(400).json({
            success : false,
            error: err.message
        })
    }
}

const deleteVehicleType = async (req, res) => {

    try{
        const { name } = req.body  
        const vehicleType = await VehicleType.create({ name });
        return res.status(201).json({
            success : true,
            results : vehicleType
        })
    }catch(err){
        return res.status(400).json({
            success : false,
            error: err.message
        })
    }
}



export { getAllVehicleType , addVehicleType}
