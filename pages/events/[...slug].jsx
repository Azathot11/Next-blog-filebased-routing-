import React from 'react';
import { useRouter } from 'next/router';
import {getFilteredEvents} from "../../utils/dummy-data";
import EventList from "../../components/events/EventList";

const FilteredEvents = () => {
    const { query } = useRouter();
    const filteredData = query.slug;

    if (!filteredData) {
        return <p className='center'>Loading...</p>;
    }

    const filteredYear =  +filteredData[0];
    const filteredMonth = + filteredData[1];

    if(isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
        return <p className='center'> Invalid filter please adjust your values</p>
    }

const filteredEvents  =getFilteredEvents({year:filteredYear,month:filteredMonth})
    if (!filteredEvents || filteredEvents.length === 0) {
        return <p className='center'>No events found for the chosen filter</p>
    }
    return (
        <div>
            <EventList items={filteredEvents}></EventList>
        </div>
    );
};

export default FilteredEvents;