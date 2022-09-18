-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prefix" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobilePhone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "nationlity" TEXT NOT NULL,
    "org" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
