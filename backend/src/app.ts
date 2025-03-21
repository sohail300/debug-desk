// Express app instance
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import profileRoutes from "./routes/profile.routes";
import orgRoutes from "./routes/org.routes";
import projectRoutes from "./routes/project.routes";
import teamRoutes from "./routes/team.routes";
import issueRoutes from "./routes/issue.routes";
import commentRoutes from "./routes/comment.routes";
import notificationRoutes from "./routes/notification.routes";
import analyticsRoutes from "./routes/analytics.routes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/profile", profileRoutes);
app.use("/org", orgRoutes);
app.use("/project", projectRoutes);
app.use("/team", teamRoutes);
app.use("/issues", issueRoutes);
app.use("/comments", commentRoutes);
app.use("/notifications", notificationRoutes);
app.use("/analytics", analyticsRoutes);

export default app;
