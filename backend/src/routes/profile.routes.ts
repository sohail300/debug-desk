// Authentication routes
import { Router } from "express";
import ProfileController from "../controllers/profile.controller";
import upload from "../middlewares/upload.middleware";

const router = Router();

router.get("/me", ProfileController.getProfile);
router.put("/edit", ProfileController.editProfile);
router.post(
  "/upload-image",
  upload.single("image"),
  ProfileController.uploadImage
);
router.get("/analytics", ProfileController.getSolvedIssues);

export default router;
