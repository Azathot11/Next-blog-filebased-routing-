import React from 'react';
import  classes from './EventItem.module.css';
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({id,title,location,date,image}) => {
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        date: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formattedAddress = location.replace(', ', '\n');
    return (
        <li className={classes.item}>
            <img src={'/'+image} alt={title}  />
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button path={`/events/${id}`}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;