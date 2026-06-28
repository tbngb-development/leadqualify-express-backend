/*
  Warnings:

  - You are about to drop the column `vapiId` on the `Assistant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bolnaId]` on the table `Assistant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bolnaId` to the `Assistant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Assistant_vapiId_key";

-- AlterTable
ALTER TABLE "Assistant" DROP COLUMN "vapiId",
ADD COLUMN     "bolnaId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Assistant_bolnaId_key" ON "Assistant"("bolnaId");
