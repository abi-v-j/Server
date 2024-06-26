import { Router } from "express";
import {
  addDistrict,
  getDistrict,
  addAdmin,
  getAdmins,
  addCategory,
  getCategories,
  addSubcategory,
  getSubcategories,
  addPlace,
  getPlaces,
  updateDistrict,
  deleteDistrict,
  updateAdmin,
  deleteAdmin,
  updateCategory,
  deleteCategory,
  updateSubCategory,
  deleteSubCategory,
  updatePlace,
  deletePlace,
} from "../controllers/admin.controllers.js";

const router = Router();

/**
 * @route POST /admin/district
 * @desc Add a new district
 * @access Public
 */
router.post("/district", addDistrict);

/**
 * @route GET /admin/district
 * @desc Get all districts
 * @access Public
 */
router.get("/district", getDistrict);

/**
 * @route PUT /admin/district
 * @desc Update a district
 * @access Public
 */
router.put("/district", updateDistrict);

/**
 * @route DELETE /admin/district
 * @desc delete a district
 * @access Public
 */
router.delete("/district", deleteDistrict);

/**
 * @route POST /admin/admin
 * @desc Add a new admin
 * @access Public
 */
router.post("/admin", addAdmin);

/**
 * @route GET /admin/admin
 * @desc Get all admins
 * @access Public
 */
router.get("/admin", getAdmins);

/**
 * @route PUT /admin/admin
 * @desc Update a admin
 * @access Public
 */
router.put("/admin", updateAdmin);

/**
 * @route DELETE /admin/admin
 * @desc delete a admin
 * @access Public
 */
router.delete("/admin", deleteAdmin);

/**
 * @route POST /admin/category
 * @desc Add a new category
 * @access Public
 */
router.post("/category", addCategory);

/**
 * @route GET /admin/category
 * @desc Get all categories
 * @access Public
 */
router.get("/category", getCategories);

/**
 * @route PUT /admin/category
 * @desc Update a category
 * @access Public
 */
router.put("/category", updateCategory);

/**
 * @route DELETE /admin/category
 * @desc delete a category
 * @access Public
 */
router.delete("/category", deleteCategory);

/**
 * @route POST /admin/subcategory
 * @desc Add a new subcategory
 * @access Public
 */
router.post("/subcategory", addSubcategory);

/**
 * @route GET /admin/subcategory
 * @desc Get all subcategories
 * @access Public
 */
router.get("/subcategory", getSubcategories);

/**
 * @route PUT /admin/subcategory
 * @desc Update a subcategory
 * @access Public
 */
router.put("/subcategory", updateSubCategory);

/**
 * @route DELETE /admin/subcategory
 * @desc delete a subcategory
 * @access Public
 */
router.delete("/subcategory", deleteSubCategory);

/**
 * @route POST /admin/place
 * @desc Add a new place
 * @access Public
 */
router.post("/place", addPlace);

/**
 * @route GET /admin/place
 * @desc Get all places
 * @access Public
 */
router.get("/place", getPlaces);

/**
 * @route PUT /admin/place
 * @desc Update a place
 * @access Public
 */
router.put("/place", updatePlace);

/**
 * @route DELETE /admin/place
 * @desc delete a place
 * @access Public
 */
router.delete("/place", deletePlace);

export default router;
