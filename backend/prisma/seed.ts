import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create Organizations
  const org1 = await prisma.organization.create({
    data: { name: "Tech Corp" },
  });

  const org2 = await prisma.organization.create({
    data: { name: "Dev Solutions" },
  });

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: "admin@techcorp.com",
      passwordHash: "hashedpassword",
      name: "Admin User",
      username: "admin",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "developer@techcorp.com",
      passwordHash: "hashedpassword",
      name: "Dev User",
      username: "dev",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: "tester@devsolutions.com",
      passwordHash: "hashedpassword",
      name: "Tester User",
      username: "tester",
    },
  });

  // Assign Users to Organizations
  await prisma.organizationMember.createMany({
    data: [
      { userId: user1.id, organizationId: org1.id, role: "OWNER" },
      { userId: user2.id, organizationId: org1.id, role: "ADMIN" },
      { userId: user3.id, organizationId: org2.id, role: "ADMIN" },
    ],
  });

  // Create Projects
  const project1 = await prisma.project.create({
    data: { name: "Bug Tracker", organizationId: org1.id },
  });

  const project2 = await prisma.project.create({
    data: { name: "Issue Manager", organizationId: org2.id },
  });

  // Assign Users to Projects
  await prisma.projectRole.createMany({
    data: [
      { userId: user1.id, projectId: project1.id, role: "ADMIN" },
      { userId: user2.id, projectId: project1.id, role: "DEVELOPER" },
      { userId: user3.id, projectId: project2.id, role: "TESTER" },
    ],
  });

  // Create Teams
  const team1 = await prisma.team.create({
    data: { name: "Backend Team", projectId: project1.id },
  });

  const team2 = await prisma.team.create({
    data: { name: "Frontend Team", projectId: project1.id },
  });

  // Assign Users to Teams
  await prisma.teamMember.createMany({
    data: [
      { teamId: team1.id, userId: user2.id },
      { teamId: team2.id, userId: user3.id },
    ],
  });

  // Create Issues
  const issue1 = await prisma.issue.create({
    data: {
      title: "Fix login bug",
      description: "Users cannot log in using Google Auth.",
      priority: "HIGH",
      status: "OPEN",
      assignedToId: user2.id,
      teamId: team1.id,
      projectId: project1.id,
      createdById: user1.id,
    },
  });

  const issue2 = await prisma.issue.create({
    data: {
      title: "Improve dashboard UI",
      description: "Need a cleaner layout for better UX.",
      priority: "MEDIUM",
      status: "IN_PROGRESS",
      assignedToId: user3.id,
      teamId: team2.id,
      projectId: project2.id,
      createdById: user1.id,
    },
  });

  // Add Comments to Issues
  await prisma.comment.createMany({
    data: [
      {
        issueId: issue1.id,
        userId: user1.id,
        content: "This bug needs urgent attention!",
      },
      {
        issueId: issue2.id,
        userId: user3.id,
        content: "I am working on this now.",
      },
    ],
  });

  // Add Notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: user2.id,
        issueId: issue1.id,
        message: "You were assigned a new issue.",
        isRead: false,
        type: "MENTION",
      },
      {
        userId: user3.id,
        issueId: issue2.id,
        message: "You were mentioned in a comment.",
        isRead: false,
        type: "MENTION",
      },
    ],
  });

  // Add Attachments
  await prisma.attachment.create({
    data: {
      issueId: issue1.id,
      userId: user1.id,
      fileUrl: "https://example.com/screenshot.png",
    },
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
