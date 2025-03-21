// Organization routes
import { Router } from "express";
import OrganizationController from "../controllers/organization.controller";

const router = Router();

router.post("/", OrganizationController.createOrganization);
router.post("/invite", OrganizationController.inviteAdmin);
router.post("/accept-invite", OrganizationController.acceptInvite);
router.delete("/remove-user", OrganizationController.removeUser);
router.get("/", OrganizationController.listOrganizations);
router.delete("/:id", OrganizationController.deleteOrganization);
router.get("/:id/members", OrganizationController.listMembers);

export default router;
