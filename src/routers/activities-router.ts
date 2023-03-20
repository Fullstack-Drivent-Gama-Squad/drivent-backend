import {
  countBookingsById,
  deleteActivityBooking,
  getActivitiesBookingByUser,
  getActivitiesByDay,
  getSections,
  postActivityBooking,
} from "@/controllers/activities-controller";
import { authenticateToken, validateBody } from "@/middlewares";
import { createActivityBookingSchema } from "@/schemas";
import { Router } from "express";

const activitiesRouter = Router();

activitiesRouter
  .all("/*", authenticateToken)
  .get("/sections", getSections)
  .get("/:dayId", getActivitiesByDay)
  .get("/count/:id", countBookingsById)
  .post("/booking", validateBody(createActivityBookingSchema), postActivityBooking)
  .delete("/booking/:id", deleteActivityBooking)
  .get("/booking/user", getActivitiesBookingByUser);

export { activitiesRouter };
