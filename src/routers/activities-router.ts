import { getActivitiesBySection, getSections } from "@/controllers/activities-controller";
import { Router } from "express";

const activitiesRouter = Router();

activitiesRouter
    .get("/sections", getSections)
    .get("/:sectionId", getActivitiesBySection)

export {activitiesRouter};