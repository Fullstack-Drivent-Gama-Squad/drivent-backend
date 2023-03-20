import activityRepository from "@/repositories/activity-repository";

async function getSections(){
    return await activityRepository.getSections();
};

async function getActivities(dayId: number) {
    return await activityRepository.getActivities(dayId);
}

const activityService = {
    getSections,
    getActivities
};

export default activityService;