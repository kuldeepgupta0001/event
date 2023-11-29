import React, { useContext, useState } from "react";
import { Context } from "../main";
import toast from "react-hot-toast";

const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const { events, setEvents } = useContext(Context);
  const submitHandler = (e) => {
    e.preventDefault();
    setEvents([...events, { eventName, eventDate, isCompleted: false }]);
    toast.success("Event Added Successfully");

    setEventName("");
    setEventDate("");
  };

  return (
    <div className="eventForm">
      <form onSubmit={submitHandler}>
        <input
          required
          type="text"
          value={eventName}
          placeholder="Add Event"
          onChange={(e) => setEventName(e.target.value)}
        />

        <input
          className="inputDate"
          type="date"
          value={eventDate}
          placeholder="Event Date"
          required
          onChange={(e) => setEventDate(e.target.value)}
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
