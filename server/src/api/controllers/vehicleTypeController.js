import VehicleType from "../models/VehicleType.js";
import User from "../models/User.js";


// const getVehicleType = async (req, res) => {

//     // VehicleType.find((err, vehicleTypes) => {})

//     // VehicleType.find((err, vehicleTypes) => {
//     //     if(err){
//     //         return res.status(400).json({
//     //             error: 'error'
//     //         })
//     //     }
//     //     return res.status(200).json({
//     //         vehicleTypes: vehicleTypes
//     //     })
//     // })
    
//     const results = await VehicleType.findOne({name:"car"});
//     console.log(results);

//     // return res.status(200).json({
//     //     results : results
//     // })

// }

const getVehicleType = async (req, res) => {

    
    const results = await VehicleType.find({});
    console.log(results);

}



export { getVehicleType }
