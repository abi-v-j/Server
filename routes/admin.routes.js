import { Router } from "express";
import { addDistrict, getDistrict } from "../controllers/admin.controllers.js";

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

export default router;
