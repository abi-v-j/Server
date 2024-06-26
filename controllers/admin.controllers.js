import { District } from "../models/admin.models.js";
import logger from '../utils/logger.js';

/**
 * Add a new district
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const addDistrict = async (req, res) => {
    try {
        const newDistrict = new District(req.body);
        const savedDistrict = await newDistrict.save();
        res.status(201).json(savedDistrict);
    } catch (error) {
        logger.error('Error adding district:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Get all districts
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getDistrict = async (req, res) => {
    try {
        const districts = await District.find();
        res.status(200).json(districts);
    } catch (error) {
        logger.error('Error fetching districts:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export { addDistrict, getDistrict };
