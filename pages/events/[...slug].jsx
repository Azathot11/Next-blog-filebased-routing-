import React from 'react';
import { useRouter } from 'next/router';
import {getFilteredEvents} from "../../utils/dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEvents = () => {
    const { query } = useRouter();
    const filteredData = query.slug;

    if (!filteredData) {
        return <p className='center'>Loading...</p>;
    }

    const filteredYear =  +filteredData[0];
    const filteredMonth = + filteredData[1];

    if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
        return (
            <>
                <ErrorAlert className='center'> Invalid filter please adjust your values</ErrorAlert>
                <div className={'center'}>
                    <Button path='/events'>Show all events</Button>
                </div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({year: filteredYear, month: filteredMonth})
    if (!filteredEvents || filteredEvents.length === 0) {
        return(
            <>
                <ErrorAlert >No events found for the chosen filter</ErrorAlert>
                <div className={'center'}>
                <Button path='/events'>Show all events</Button>
                </div>
            </>
        )
    }

    const date = new Date(filteredYear, filteredMonth - 1);
    return (
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}></EventList>
        </>
    );
};

export default FilteredEvents;