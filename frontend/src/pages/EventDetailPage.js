import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return (
      <EventItem event={data.event} />
  );
}

export default EventDetailPage;

export async function loader ({params}) {
  const id = params.EventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok){
    throw json({message: "could not fetch event details."}, {status: 500})
  }
  else{
    return response;
  }

};