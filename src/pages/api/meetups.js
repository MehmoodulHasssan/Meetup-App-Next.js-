import { db } from '@/firebase/clientApp';
import { collection, doc, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const meetupsCollectionRef = collection(db, 'meetups');
    const meetupsSnapShot = await getDocs(meetupsCollectionRef);
    const meetupsData = meetupsSnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    // console.log(coll.docs.map((doc) => doc.data()));
    res.status(200).json({
      message: 'Success',
      data: meetupsData,
    });
  } catch (error) {
    console.error('Error fetching meetups:', error);
    res.status(500).json({ message: 'Error fetching meetups' });
  }
}

// that will be the code if we want to target nested collections
// const meetupsCollectionRef = collection(db, 'meetups');
// const meetupsSnap = await getDocs(meetupsCollectionRef);
// const meetupsData = await Promise.all(
//   meetupsSnap.docs.map(async (meetupDoc) => {
//     const subcollectionRef = collection(meetupDoc.ref, 'e1');
//     const subcollsnap = await getDocs(subcollectionRef);

//     const subcollectionData = subcollsnap.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     return {
//       data: subcollectionData,
//     };
//   })
// );
