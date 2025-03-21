// Project routes
import { Router } from "express";
import ProjectController from "../controllers/project.controller";

const router = Router();

router.post("/", ProjectController.createProject);
router.delete("/:id", ProjectController.deleteProject);
router.patch("/:id/archive", ProjectController.archiveProject);
router.post("/invite", ProjectController.inviteToProject);
router.delete("/remove-user", ProjectController.removeUserFromProject);
router.get("/", ProjectController.listProjects);
router.patch("/upgrade-role", ProjectController.upgradeRole);
router.get("/:id/users", ProjectController.listProjectUsers);

export default router;
