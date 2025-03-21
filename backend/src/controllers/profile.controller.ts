// Authentication controller
import { Request, Response } from "express";
import ProfileService from "../services/profile.service";
import { UpdateUserSchema } from "../validators/profile";
import { validationErrorHandler } from "../utils/errorHandler";
import { uploadToStorage } from "../utils/fileUpload";

class AuthController {
  static async getProfile(req: Request, res: Response) {
    const userId = req.user.id;
    const profile = await ProfileService.getProfile(userId);
    return res.json(profile);
  }

  static async editProfile(req: Request, res: Response) {
    try {
      const validatedData = UpdateUserSchema.parse(req.body);
      const updatedProfile = await ProfileService.editProfile(
        req.user.id,
        validatedData
      );
      return res.json(updatedProfile);
    } catch (error) {
      return validationErrorHandler(res, error);
    }
  }

  static async uploadImage(req: Request, res: Response) {
    if (!req.file)
      return res.status(400).json({ message: "No image uploaded" });

    const imageUrl = await uploadToStorage(req.file);
    const updatedUser = await ProfileService.uploadImage(req.user.id, imageUrl);

    return res.json(updatedUser);
  }

  static async getSolvedIssues(req: Request, res: Response) {
    const solvedIssues = await ProfileService.getSolvedIssues(req.user.id);
    return res.json(solvedIssues);
  }
}

export default AuthController;
