import activityRepository from "@/repositories/activity-repository";

async function getSections(){
    return await activityRepository.getSections();
};

async function getActivities(sectionId: number, dayId: number) {
    return await activityRepository.getActivities(sectionId, dayId);
}

const activityService = {
    getSections,
    getActivities
};

export default activityService;