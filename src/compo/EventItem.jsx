import React from "react";

const Eventitem = ({
  eventName,
  eventDate,
  isCompleted,
  updateHandler,
  deleteHandler,
  index,
}) => {
  return (
    <div className="eventItems">
      <div className="name">
        <h4>{eventName}</h4>
        <p>{eventDate}</p>
      </div>
      <div className="handler">
        <input
          onChange={() => updateHandler(index)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(index)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Eventitem;
