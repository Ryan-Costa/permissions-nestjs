/*
  Warnings:

  - You are about to drop the column `passowrd` on the `User` table. All the data in the column will be lost.
  - Added the required column `passoword` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passowrd",
ADD COLUMN     "passoword" TEXT NOT NULL;
