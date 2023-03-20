import { notFoundError } from "@/errors";
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

async function getActivityById(id: number) {
  return await activityRepository.getActivityById(id);
}

async function postNewActivityBooking(userId: number, activityId: number) {
  const activity = await getActivityById(activityId);
  if(!activity) throw notFoundError();
  
  return await activityRepository.createNewActivityBooking(userId, activityId);
}

async function deleteActivityBooking(userId: number, activityId: number) {
  const activity = await getActivityById(activityId);
  if(!activity) throw notFoundError();
    
  return await activityRepository.deleteActivityBooking(userId, activityId);
}

async function getActivitiesBookingByUserId(userId: number) {
  return await activityRepository.findActivitiesBookingByUserId(userId);
}

const activityService = {
  getSections,
  getActivities,
  getBookingsAmountByActivity,
  postNewActivityBooking,
  deleteActivityBooking,
  getActivitiesBookingByUserId
};

export default activityService;

