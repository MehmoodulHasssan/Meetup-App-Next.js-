import React from 'react';
import MeetupDetailsItem from '../../../components/meetups/MeetupDetailsItem';
import { meetups } from '..';
import { useRouter } from 'next/router';

const MeetupDetails = (props) => {
  const router = useRouter();
  return (
    <MeetupDetailsItem meetupId={router.query.meetupId} meetup={props.data} />
  );
};

export default MeetupDetails;

export async function getServerSideProps(context) {
  try {
    const reqId = context.params.meetupId;
    const response = await fetch('http://localhost:3000/api/' + reqId);

    if (!response.ok) {
      throw response.json();
    }
    const resData = await response.json();
    return {
      props: {
        data: resData.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
