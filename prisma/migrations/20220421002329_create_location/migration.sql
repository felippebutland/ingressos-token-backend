/*
  Warnings:

  - Added the required column `createdAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Ticket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('SHOWS', 'TEATRO', 'DANCA', 'INFANTIL', 'FESTA', 'CLASSICOS');

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "locationId" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "Categories" NOT NULL;

-- DropEnum
DROP TYPE "Category";

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
