import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { bookingRoom, listBooking, changeBooking, checkBookingByRoomId } from "@/controllers";

const bookingRouter = Router();

bookingRouter
  .all("/*", authenticateToken)
  .get("", listBooking)
  .get("/room/:roomId", checkBookingByRoomId)
  .post("", bookingRoom)
  .put("/:bookingId", changeBooking);

export { bookingRouter };
