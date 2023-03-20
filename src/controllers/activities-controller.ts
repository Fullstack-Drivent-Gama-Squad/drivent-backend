import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import activityService from "@/services/activities-service";

export async function getSections(req: AuthenticatedRequest, res: Response) {    
    try{
        const sections = await activityService.getSections();
        return res.send(sections);
    } catch(err){
        console.log(err)
    }
};

export async function getActivitiesBySection(req: AuthenticatedRequest, res: Response) {
    const {sectionId} = req.params;
    const {dayId} = req.query;

    if(!dayId || !sectionId){
        return res.status(400).send(httpStatus["400_MESSAGE"]);
    };

    try{
        const activities = await activityService.getActivities(Number(sectionId), Number(dayId));
        return res.send();
    } catch(err){
        console.log(err)
    }
};