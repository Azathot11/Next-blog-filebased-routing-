import React from 'react';
import { useRouter } from 'next/router';

const EventDetails = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Event Details {query.id} </h1>
        </div>
    );
};

    export default EventDetails;