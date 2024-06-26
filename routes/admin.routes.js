import { Router } from "express";
import {
    addDistrict, getDistrict,
    addAdmin, getAdmins,
    addCategory, getCategories,
    addSubcategory, getSubcategories,
    addPlace, getPlaces
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

export default router;
