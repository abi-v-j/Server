import {
  Admin,
  District,
  Category,
  Subcategory,
  Place,
} from "../models/admin.models.js";
import logger from "../utils/logger.js";

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
    logger.error("Error adding district:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error fetching districts:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Update a district
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the district to update
 * @param {object} req.body - The updated district data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const updateDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDistrict = await District.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedDistrict);
  } catch (error) {
    logger.error("Error updating district:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Delete a district
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the district to delete
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    await District.findByIdAndDelete(id);
    res.status(200).json({ message: "District deleted successfully" });
  } catch (error) {
    logger.error("Error deleting district:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error adding admin:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error fetching admins:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Update a admin
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the admin to update
 * @param {object} req.body - The updated admin data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAdmin = await Admin.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    logger.error("Error updating admin:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Delete a admin
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the admin to delete
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await Admin.findByIdAndDelete(id);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    logger.error("Error deleting admin:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error adding category:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error fetching categories:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Update a category
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the category to update
 * @param {object} req.body - The updated category data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    logger.error("Error updating category:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Delete a category
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the category to delete
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    logger.error("Error deleting category:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error adding subcategory:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error fetching subcategories:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Update a subcategory
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the subcategory to update
 * @param {object} req.body - The updated subcategory data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSubCategory = await Subcategory.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSubCategory);
  } catch (error) {
    logger.error("Error updating category:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Delete a subcategory
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the subcategory to delete
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Subcategory.findByIdAndDelete(id);
    res.status(200).json({ message: "SubCategory deleted successfully" });
  } catch (error) {
    logger.error("Error deleting Subcategory:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error adding place:", error);
    res.status(500).json({ message: "Server Error" });
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
    logger.error("Error fetching places:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Update a place
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the place to update
 * @param {object} req.body - The updated place data
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlace = await Place.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPlace);
  } catch (error) {
    logger.error("Error updating place:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * Delete a place
 * @param {object} req - Express request object
 * @param {object} req.params.id - The ID of the place to delete
 * @param {object} res - Express response object
 * @returns {Promise<void>}
 */
const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    res.status(200).json({ message: "Place deleted successfully" });
  } catch (error) {
    logger.error("Error deleting Place:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export {
  addDistrict,
  getDistrict,
  updateDistrict,
  deleteDistrict,
  addAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin,
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  addSubcategory,
  getSubcategories,
  updateSubCategory,
  deleteSubCategory,
  addPlace,
  getPlaces,
  updatePlace,
  deletePlace,
};
