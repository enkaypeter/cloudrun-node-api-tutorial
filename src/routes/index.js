import express from 'express';
import baseController from "../controllers/base-controller";
import validationMiddleware from '../middleware/validation-middleware';
const router = express();



router.get("/", baseController.index);
router.post("/signup", validationMiddleware.signup, baseController.signup)

module.exports = router;
