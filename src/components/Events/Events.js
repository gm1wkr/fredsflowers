import React from "react";
import Event from "./Event";
import styled from "styled-components";

const EventList = styled.ul`
  list-style: none;
`;

const Events = ({ events }) => {

  const eventNodes = events.map( event => <Event key={event.id} event={event} />);

  return(
    <>
      <EventList>
        {eventNodes}
      </EventList>
    </>
  )

}

export default Events;