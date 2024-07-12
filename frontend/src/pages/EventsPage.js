import React from "react";
import { Link } from "react-router-dom";

const dummy_event = [
  {
    id: "1",
    title: "Event 1",
  },
  {
    id: "2",
    title: "Event 2",
  },
];

function EventsPage() {
  return (
    <>
      <ul>
        {dummy_event.map((eventId) => (
          <li key={eventId.id}>
            <Link to={eventId.id}>
              <h1>{eventId.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
