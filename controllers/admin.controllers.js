import { Admin, District, Category, Subcategory, Place } from "../models/admin.models.js";
import logger from '../utils/logger.js';

/**
 * Add a new district
 * @param {object} req - Express request object
 * @param {object} req.body - The district data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
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
 * @returns {Promise<void>}
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

/**
 * Add a new admin
 * @param {object} req - Express request object
 * @param {object} req.body - The admin data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const addAdmin = async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        logger.error('Error adding admin:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Get all admins
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        logger.error('Error fetching admins:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Add a new category
 * @param {object} req - Express request object
 * @param {object} req.body - The category data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const addCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        logger.error('Error adding category:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Get all categories
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        logger.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Add a new subcategory
 * @param {object} req - Express request object
 * @param {object} req.body - The subcategory data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const addSubcategory = async (req, res) => {
    try {
        const newSubcategory = new Subcategory(req.body);
        const savedSubcategory = await newSubcategory.save();
        res.status(201).json(savedSubcategory);
    } catch (error) {
        logger.error('Error adding subcategory:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Get all subcategories
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const getSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.find();
        res.status(200).json(subcategories);
    } catch (error) {
        logger.error('Error fetching subcategories:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Add a new place
 * @param {object} req - Express request object
 * @param {object} req.body - The place data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const addPlace = async (req, res) => {
    try {
        const newPlace = new Place(req.body);
        const savedPlace = await newPlace.save();
        res.status(201).json(savedPlace);
    } catch (error) {
        logger.error('Error adding place:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

/**
 * Get all places
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const getPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.status(200).json(places);
    } catch (error) {
        logger.error('Error fetching places:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export {
    addDistrict, getDistrict,
    addAdmin, getAdmins,
    addCategory, getCategories,
    addSubcategory, getSubcategories,
    addPlace, getPlaces
};
