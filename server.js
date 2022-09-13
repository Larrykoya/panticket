import express from "express";
import { homeController } from "./controllers/home.controller";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  validateEventData,
  validateEventUpdateData,
} from "./controllers/middleware/event.validator";
import {
  validateOrganizerData,
  validateOrganizerUpdateData,
} from "./controllers/middleware/organizer.validator";
import { validateCategoryData } from "./controllers/middleware/category.validator";
import {
  validateTicketTypeData,
  validateTicketTypeUpdateData,
} from "./controllers/middleware/ticketType.validator";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  fetchEvent,
  fetchSingleEvent,
} from "./controllers/event.controller";
import {
  createOrganizer,
  updateOrganizer,
  deleteOrganizer,
  fetchOrganizer,
  fetchSingleOganizer,
} from "./controllers/organizer.controller";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  fetchCategory,
  fetchSingleCategory,
} from "./controllers/category.controller";
import {
  createTicketType,
  updateTicketType,
  deleteTicketType,
  fetchTicketType,
  fetchSingleTicketType,
} from "./controllers/ticketType.controller";
dotenv.config();

const connectToDB = () => mongoose.connect(process.env.DEV_DB);
connectToDB()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
let port = 4001;

if (process.env.NODE_ENV !== "development") {
  port = process.env.PORT;
}

server.get("/", homeController);

server.get("/event", fetchEvent);
server.get("/event/:id", fetchSingleEvent);
server.post("/event", validateEventData, createEvent);
server.put("/event/:id", validateEventUpdateData, updateEvent);
server.delete("/event/:id", deleteEvent);

server.get("/organizer", fetchOrganizer);
server.get("/organizer/:id", fetchSingleOganizer);
server.delete("/organizer/:id", deleteOrganizer);
server.put("/organizer/:id", validateOrganizerUpdateData, updateOrganizer);
server.post("/organizer", validateOrganizerData, createOrganizer);

server.get("/category", fetchCategory);
server.get("/category/:id", fetchSingleCategory);
server.put("/category/:id", validateCategoryData, updateCategory);
server.post("/category", validateCategoryData, createCategory);
server.delete("/category/:id", deleteCategory);

server.get("/tickettype", fetchTicketType);
server.get("/tickettype/:id", fetchSingleTicketType);
server.delete("/tickettype/:id", deleteTicketType);
server.put("/tickettype/:id", validateTicketTypeUpdateData, updateTicketType);
server.post("/tickettype", validateTicketTypeData, createTicketType);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
