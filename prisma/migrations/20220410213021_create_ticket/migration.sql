-- CreateEnum
CREATE TYPE "Category" AS ENUM ('CONCERT', 'PARTY', 'EVENT');

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
