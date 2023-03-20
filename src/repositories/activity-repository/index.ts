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

async function getActivityById(id: number) {
  return prisma.activity.findUnique({
    where: { id },
  });
}

async function createNewActivityBooking(userId: number, activityId: number) {
  return prisma.activityBooking.create({
    data: {
      userId,
      activityId,
    },
  });
}

async function deleteActivityBooking(userId: number, activityId: number) {
  return prisma.activityBooking.deleteMany({
    where: { userId, activityId },
  });
}

async function findActivitiesBookingByUserId(userId: number) {
  return prisma.activityBooking.findMany({
    where: { userId },
    include: { Activity: true }
  });
}

const activityRepository = {
  getSections,
  getActivities,
  countBookingsByActivity,
  getActivityById,
  createNewActivityBooking,
  deleteActivityBooking,
  findActivitiesBookingByUserId,
};

export default activityRepository;
