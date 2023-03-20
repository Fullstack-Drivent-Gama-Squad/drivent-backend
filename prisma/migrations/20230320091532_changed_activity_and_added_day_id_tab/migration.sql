/*
  Warnings:

  - You are about to drop the column `date` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `dayId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "date",
ADD COLUMN     "dayId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Day" (
    "id" SERIAL NOT NULL,
    "day" DATE NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- RenameForeignKey
ALTER TABLE "Activity" RENAME CONSTRAINT "activity_fk0" TO "activity_fk1";

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "activity_fk0" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
