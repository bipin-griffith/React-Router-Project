import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailsLoader,
  action as eventDetailsAction,
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":EventId",
            id: "event-detail",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailsAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
