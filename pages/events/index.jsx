import React from 'react';
import {getAllEvents} from "../../utils/dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import {useRouter} from "next/router";

const AllEvents = () => {
    const  router= useRouter()
    const events = getAllEvents()

    const searchEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <div>
            <EventsSearch onSearch={searchEventsHandler}/>
            <EventList items={events}/>
        </div>
    );
};

export default AllEvents;