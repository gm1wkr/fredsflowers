import React, { useState, useEffect } from "react";
import Events from "../components/Events/Events";
import eventData from "../EventData";

const HomePage = () => {

  const [events, setEvents] = useState(eventData);

  useEffect( () => {
    setEvents(events)
  }, [events]);

  return (
    <main>
      <h2>Home Page</h2>
      <p>Welcome to the Auchnagatt Garden Club.  </p>
      <Events events={events} />
    </main>
  )
}

export default HomePage;