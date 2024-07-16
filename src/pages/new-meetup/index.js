import React from 'react';
import NewMeetupForm from '../../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetup = (props) => {
  const router = useRouter();
  // console.log(props.data);

  async function addMeetup(meetupData) {
    console.log('addtriggerred');
    try {
      const res = await fetch('http://localhost:3000/api/new-meetup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(meetupData),
      });

      if (!res.ok) {
        throw res.json();
      }
    } catch (error) {
      console.log(error);
    }

    router.push('/');
  }

  return <NewMeetupForm onPress={addMeetup} buttonText="Add Meetup" />;
};

export default NewMeetup;
