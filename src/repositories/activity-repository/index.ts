import { prisma } from "@/config";

async function getSections() {
  return prisma.section.findMany();
}

async function getActivities(dayId: number) {
  return prisma.activity.findMany({
    where: {
      dayId: dayId,
    },
  });
}

async function countBookingsByActivity(activityId: number) {
  return prisma.activityBooking.count({
    where: {
      activityId,
    },
  });
}

const activityRepository = {
  getSections,
  getActivities,
  countBookingsByActivity,
};

export default activityRepository;
