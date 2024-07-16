import React from 'react';
import { useRef } from 'react';
import MeetupList from '../../components/meetups/MeetupList';
import LoadingBar from 'react-top-loading-bar';
import usePageLoading from '../../components/hooks/usePageLoading';
import { useRouter } from 'next/router';

export default function HomePage(props) {
  const router = useRouter();
  // const bar = useRef();
  const { isLoading, isError } = usePageLoading();
  // console.log(isLoading, isError);

  // if (isLoading) {
  //   bar.current.continuousStart();
  // }

  async function onDelete(id) {
    const res = await fetch('http://localhost:3000/api/' + id, {
      method: 'DELETE',
    });
    const resData = await res.json();
    console.log(resData);
  }
  async function onUpdate(id) {
    console.log(id);
    router.push(`/new-meetup/${id}`);
  }
  return (
    <>
      {/* <LoadingBar color="#00FFFF" ref={bar} /> */}
      <MeetupList
        meetups={props.meetups}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/meetups');
  const resData = await res.json();
  return {
    props: {
      meetups: resData.data,
    },
  };
}
