// Notification routes
import { Router } from "express";
import NotificationController from "../controllers/notification.controller";

const router = Router();

router.get("/", NotificationController.listNotifications);
router.get("/unread-count", NotificationController.getUnreadCount);
router.post("/mark-read", NotificationController.markRead);

export default router;
