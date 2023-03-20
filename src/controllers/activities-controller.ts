import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import activityService from "@/services/activities-service";

export async function getSections(req: AuthenticatedRequest, res: Response) {
  try {
    const sections = await activityService.getSections();
    return res.send(sections);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export async function getActivitiesByDay(req: AuthenticatedRequest, res: Response) {
  const { dayId } = req.params;

  if (!dayId) {
    return res.status(400).send(httpStatus["400_MESSAGE"]);
  }

  try {
    const activities = await activityService.getActivities(Number(dayId));
    return res.send(activities);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export async function countBookingsById(req: AuthenticatedRequest, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send(httpStatus["400_MESSAGE"]);
  }

  try {
    const bookingsAmount = await activityService.getBookingsAmountByActivity(Number(id));
    return res.send({ bookingsAmount });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export async function postActivityBooking(req: AuthenticatedRequest, res: Response) {
  try {
    await activityService.postNewActivityBooking(Number(req.userId), req.body.activityId as number);
    return res.sendStatus(201);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    if (err.name === "NotFoundError") return res.status(httpStatus.NOT_FOUND).send(err.message);
  }
}

export async function deleteActivityBooking(req: AuthenticatedRequest, res: Response) {
  try {
    await activityService.deleteActivityBooking(Number(req.userId), Number(req.params.id));
    return res.sendStatus(200);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    if (err.name === "NotFoundError") return res.status(httpStatus.NOT_FOUND).send(err.message);
  }
}

export async function getActivitiesBookingByUser(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  
  if (!userId) {
    return res.status(400).send(httpStatus["400_MESSAGE"]);
  }
  
  try {
    const activities = await activityService.getActivitiesBookingByUserId(userId);
    return res.send(activities);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}
