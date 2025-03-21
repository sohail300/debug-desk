import { Router } from "express";
import TeamController from "../controllers/team.controller";

const router = Router();

router.post("/", TeamController.createTeam);
router.delete("/:id", TeamController.deleteTeam);
router.patch("/:id", TeamController.updateTeam);
router.get("/", TeamController.listTeams);
router.post("/assign", TeamController.assignMember);
router.delete("/remove-member", TeamController.removeMember);
router.get("/:id/members", TeamController.listTeamMembers);
router.get("/:id/check-user/:userId", TeamController.checkUserInTeam);

export default router;
// Team routes
