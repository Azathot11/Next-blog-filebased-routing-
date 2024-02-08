import React from 'react';
import {getAllEvents} from "../../utils/dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

const AllEvents = () => {
    const events = getAllEvents()
    return (
        <div>
            <EventsSearch/>
            <EventList items={events}/>
        </div>
    );
};

export default AllEvents;