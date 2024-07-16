import React from 'react';
import NewMeetupForm from '../../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import { db } from '@/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';

const UpdateMeetup = (props) => {
  // console.log(props.data);
  const router = useRouter();
  const { meetupId } = router.query;
  async function updateMeetup(meetupData) {
    console.log('updatetriggered');
    // console.log(meetupData);
    try {
      const res = await fetch('http://localhost:3000/api/' + meetupId, {
        method: 'PATCH',
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

  return (
    <NewMeetupForm
      onPress={updateMeetup}
      buttonText="Update Meetup"
      data={props.data}
    />
  );
};

export default UpdateMeetup;

export async function getServerSideProps(context) {
  const { meetupId } = context.params;
  const meetupRef = doc(db, 'meetups', meetupId);
  const meetup = await getDoc(meetupRef);
  // console.log(meetup.data);
  return {
    props: {
      data: meetup.data(),
    },
  };
}
