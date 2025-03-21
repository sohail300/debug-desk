import { Router } from "express";
import IssueController from "../controllers/issue.controller";

const router = Router();

router.post("/", IssueController.createIssue);
router.patch("/:id", IssueController.updateIssue);
router.delete("/:id", IssueController.deleteIssue);
router.get("/", IssueController.listIssues);
router.get("/:id", IssueController.getIssueDetails);
router.patch("/:id/status", IssueController.updateStatus);
router.post("/upload-attachment", IssueController.uploadAttachment);

export default router;
// Issue routes
