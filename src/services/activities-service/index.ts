import activityRepository from "@/repositories/activity-repository";

async function getSections() {
  return await activityRepository.getSections();
}

async function getActivities(dayId: number) {
  return await activityRepository.getActivities(dayId);
}

async function getBookingsAmountByActivity(id: number) {
  return await activityRepository.countBookingsByActivity(id);
}

const activityService = {
  getSections,
  getActivities,
  getBookingsAmountByActivity
};

export default activityService;
