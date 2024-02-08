import React from 'react';
import { useRouter } from 'next/router';
import {getEventById} from "../../utils/dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";


const EventDetails = () => {
    const { query } = useRouter();

    const  details = getEventById(query.id);
    if (!details) {
        return <p>No event found!</p>;
    }
    return (
        <>
           <EventSummary title ={details.title}/>
            <EventLogistics {...details}/>
            <EventContent>
                <p>{details.description}</p>
            </EventContent>
        </>
    );
};

    export default EventDetails;