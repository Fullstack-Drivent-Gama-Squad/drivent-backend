import { prisma } from "@/config";

async function getSections(){
    return prisma.section.findMany();
};

async function getActivities(dayId: number) {
    return prisma.activity.findMany({
        where:{
            dayId: dayId
        }
    })
}

const activityRepository = {
    getSections,
    getActivities
};

export default activityRepository;