import React from 'react';
import {getFeaturedEvents} from "../utils/dummy-data";
import EventList from "../components/events/EventList";


const Home  = () => {

    const featuredEvents =  getFeaturedEvents()
    return (
        <div>
                <EventList items={featuredEvents} />
        </div>
    );
};

export default Home ;