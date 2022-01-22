import VehicleType from "../models/VehicleType.js";

const getAllVehicleType = async (req, res) => {

    try {
        const docs = await VehicleType.find({name:"car"});
        return res.status(200).json({
            status : true,
            message : docs
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
    
}

const addVehicleType = async (req, res) => {

    try{
        const { name } = req.body  
        const vehicleType = await VehicleType.create({ name });
        return res.status(201).json({
            status : true,
            message : vehicleType
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
}

const deleteVehicleType = async (req, res) => {
    console.log(req.params);

    try {
        const {
           id,
        } = req.params
  
        await VehicleType.findOneAndRemove({ _id: id })
        res.status(200).json({
           status: true,
           message: "deleted successfully"
        })
     } catch (e) {
        res.status(400).json({
           status: false,
           message: e.message
        })
     }
}



export { getAllVehicleType , addVehicleType, deleteVehicleType}
