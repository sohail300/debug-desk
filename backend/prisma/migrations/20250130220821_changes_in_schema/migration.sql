/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('MENTION', 'NEW_ISSUE', 'CLOSED_ISSUE');

-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "type" "NotificationType";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
