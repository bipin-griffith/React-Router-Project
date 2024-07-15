import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";
import { getAuthToken } from "../util/auth";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ params }) {
  const id = params.EventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "could not fetch event details." }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ params, request}) {
  const id = params.EventId;
  
  const token = getAuthToken();

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw json({ message: "could not delete the event." }, { status: 500 });
  }
  return redirect('/events');
}
