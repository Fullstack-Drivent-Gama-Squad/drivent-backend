import { Router } from "express";
import { getDefaultEvent, postEvent } from "@/controllers";

const eventsRouter = Router();

eventsRouter.get("/", getDefaultEvent);
eventsRouter.post("/", postEvent);


export { eventsRouter };
