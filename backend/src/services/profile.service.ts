import prisma from "../config/prisma";
import { UpdateUserSchema } from "../validators/profile";
import { z } from "zod";

class ProfileService {
  static async getProfile(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        imageUrl: true,
        createdAt: true,
      },
    });
  }

  static async editProfile(
    userId: string,
    data: z.infer<typeof UpdateUserSchema>
  ) {
    return await prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        imageUrl: true,
        createdAt: true,
      },
    });
  }

  static async uploadImage(userId: string, imageUrl: string) {
    return await prisma.user.update({
      where: { id: userId },
      data: { imageUrl },
      select: {
        id: true,
        imageUrl: true,
      },
    });
  }

  static async getSolvedIssues(userId: string) {
    const count = await prisma.issue.count({
      where: {
        assignedTo: userId,
        status: "resolved",
      },
    });
    return { solvedIssues: count };
  }
}

export default ProfileService;
