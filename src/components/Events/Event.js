import React from "react";
import styled from "styled-components";

const EventItem = styled.li`
  max-width: 60vw;
  margin: 0 auto 2rem auto;
  padding: 1rem;
  border-radius: 1rem;;
  background-color: rgba(252, 226, 120, 0.38);
  box-shadow: 0.3rem 0.1rem 0.6rem -0.3rem hsl(63, 100%, 20%);
  &>*{
    margin-bottom: 1rem;
    padding: 0;

  }

`;


const Event = ({ event }) => {

  const startDate = event.startDate.toString();
  console.log(typeof(event.startDate));

  return(
    <EventItem>

      <h4>{event.title}</h4>
      <p>{startDate}</p>
      <p>{event.description}</p>
    </EventItem>

  )
};

export default Event;