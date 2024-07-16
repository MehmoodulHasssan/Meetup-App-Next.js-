import React from 'react';
import classes from './MeetupDetails.module.css';

const MeetupDetailsItem = ({ meetup }) => {
  console.log(meetup);
  return (
    <div className={classes.div}>
      <img className={classes.img} src={meetup.image} alt={meetup.title} />
      <h1 className={classes.h1}>{meetup.title}</h1>
      <address className={classes.address}>
        <strong>Address: </strong>
        {meetup.address}
      </address>
      <p className={classes.p}>{meetup.description}</p>
    </div>
  );
};

export default MeetupDetailsItem;
