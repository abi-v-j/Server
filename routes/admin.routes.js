

import { Router } from "express";
import { addDistrict } from "../controllers/admin.controllers.js";

const router = Router();



router.post("/district", addDistrict)

export default router