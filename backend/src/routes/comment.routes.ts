// Comment routes
import { Router } from "express";
import CommentController from "../controllers/comment.controller";

const router = Router();

router.post("/", CommentController.addComment);
router.patch("/:id", CommentController.editComment);
router.delete("/:id", CommentController.deleteComment);
router.get("/:issueId", CommentController.listComments);

export default router;
