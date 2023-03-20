import { countBookingsById, getActivitiesByDay, getSections } from "@/controllers/activities-controller";
import { Router } from "express";

const activitiesRouter = Router();

activitiesRouter
  .get("/sections", getSections)
  .get("/:dayId", getActivitiesByDay)
  .get("/count/:id", countBookingsById);

export { activitiesRouter };
