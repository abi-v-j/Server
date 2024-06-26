import { District } from "../models/admin.models.js";


const addDistrict = async (req, res) => {
    try {
        const newDistrict = new District(req.body);
        const savedDistrict = await newDistrict.save();
        res.json(savedDistrict);
    } catch (error) {
        console.log(error);
    }
}


const getDistrict = async (req, res) => {
    try {
        const districts = await District.find();
        res.json(districts);

    } catch (error) {

    }
}

export {addDistrict,getDistrict}