/*
  Warnings:

  - You are about to drop the column `roomId` on the `ActivityBooking` table. All the data in the column will be lost.
  - Added the required column `activityId` to the `ActivityBooking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ActivityBooking" DROP CONSTRAINT "ActivityBooking_roomId_fkey";

-- AlterTable
ALTER TABLE "ActivityBooking" DROP COLUMN "roomId",
ADD COLUMN     "activityId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ActivityBooking" ADD CONSTRAINT "ActivityBooking_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
