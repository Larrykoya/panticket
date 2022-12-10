import Event from "../models/event.model";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "larrykoya",
  api_key: "332728735358391",
  api_secret: "sU3tBEhNsExduvy2XC5o_1V6A6A",
});

export async function createEvent(req, res) {
  console.log(req.file);
  try {
    const uploadImage = await cloudinary.v2.uploader.upload(req.file.path);
    const newEvent = await Event.create(req.body);
    return res.status(201).json({
      message: "event created successfully",
      event: newEvent,
    });
  } catch (err) {
    console.log(err.messsage);
    return res.status(500).json({
      message: "issue processing your request",
    });
  }
}
export async function updateEvent(req, res) {
  try {
    let updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body);
    return res.status(201).json({
      message: "update successful",
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "unable to update",
    });
  }
}
export async function deleteEvent(req, res) {
  try {
    await Event.findByIdAndDelete(req.params.id);
    return res.status(204).json({ message: "event successfully deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "unable to delete event",
    });
  }
}
export async function fetchEvent(req, res) {
  try {
    let events = await Event.find({});
    return res.status(200).json({
      message: "See all available events below",
      events,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Unable to fetch events",
    });
  }
}
export async function fetchSingleEvent(req, res) {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    return res.status(200).json({
      message: "Event Fetched",
      event: event,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Unable to Fetch Event",
    });
  }
}
