import React, { useContext } from "react";
import { Context } from "../main";
import Eventitem from "./EventItem.jsx";
import toast from "react-hot-toast";

const EventList = () => {
  const { events, setEvents } = useContext(Context);
  const updateHandler = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].isCompleted = !updatedEvents[index].isCompleted;
    setEvents(updatedEvents);
    toast.success("Event Updated Successfully");
  };

  const deleteHandler = (index) => {
    const filterEvents = events.filter((item, i) => i != index);
    setEvents(filterEvents);
    toast.success("Event Deleted Successfully");
  };

  return (
    <div className="eventList">
      <h2>Event List</h2>
      {events.map((event, index) => (
        <Eventitem
          eventName={event.eventName}
          eventDate={event.eventDate}
          isCompleted={event.isCompleted}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default EventList;
