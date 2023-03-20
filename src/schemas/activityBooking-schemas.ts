import { ActivityBooking } from "@prisma/client";
import Joi from "joi";

export const createActivityBookingSchema = Joi.object<CreateActivityBooking>({
  activityId: Joi.number().required(),
});

export type CreateActivityBooking = Pick<ActivityBooking, "activityId" >;
