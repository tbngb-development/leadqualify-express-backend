/*
  Warnings:

  - You are about to drop the column `vapiCallId` on the `Call` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bolnaCallId]` on the table `Call` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Call_vapiCallId_key";

-- AlterTable
ALTER TABLE "Call" DROP COLUMN "vapiCallId",
ADD COLUMN     "bolnaCallId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Call_bolnaCallId_key" ON "Call"("bolnaCallId");
