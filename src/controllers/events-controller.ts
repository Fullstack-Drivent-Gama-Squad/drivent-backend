import eventsService from "@/services/events-service";
import { Request, Response } from "express";
import httpStatus from "http-status";
import dotenv from "dotenv";
import { createClient } from "redis";
import { PostEvent } from "@/protocols";
dotenv.config();

const redis = createClient({
  url: process.env.REDIS_URL,
});

const connectRedis = async () => {
  await redis.connect();
};

connectRedis();

export async function getDefaultEvent(_req: Request, res: Response) {
  const cacheKey = "event";
  try {
    const cachedEvents = await redis.get(cacheKey);

    if (cachedEvents) {
      res.send(JSON.parse(cachedEvents));
    } else {
      const event = await eventsService.getFirstEvent();
      redis.set(cacheKey, JSON.stringify(event));
      return res.status(httpStatus.OK).send(event);
    }
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}

export async function postEvent(req: Request, res: Response) {
  const { title, backgroundImageUrl, logoImageUrl } = req.body as PostEvent;
  
  try {
    await eventsService.postEvent({ title, backgroundImageUrl, logoImageUrl });
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
