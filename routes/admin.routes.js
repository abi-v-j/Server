

import { Router } from "express";
import { addDistrict, getDistrict } from "../controllers/admin.controllers.js";

const router = Router();



router.post("/district", addDistrict)
router.get("/district", getDistrict)

export default router