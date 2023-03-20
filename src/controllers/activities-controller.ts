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

export async function getActivitiesByDay(req: AuthenticatedRequest, res: Response) {
    const {dayId} = req.params;

    if(!dayId){
        return res.status(400).send(httpStatus["400_MESSAGE"]);
    };

    try{
        const activities = await activityService.getActivities(Number(dayId));
        return res.send(activities);
    } catch(err){
        console.log(err)
    }
};