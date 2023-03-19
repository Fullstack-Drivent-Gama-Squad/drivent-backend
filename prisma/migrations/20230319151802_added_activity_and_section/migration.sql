-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "startHour" TIME(6) NOT NULL,
    "endHour" TIME(6) NOT NULL,
    "vacancies" INTEGER NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "activity_fk0" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
