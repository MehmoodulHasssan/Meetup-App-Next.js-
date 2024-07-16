import { db } from '@/firebase/clientApp';
import { getDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  const { meetupId } = req.query;
  if (req.method === 'PATCH') {
    const meetupRef = doc(db, 'meetups', meetupId);
    await updateDoc(meetupRef, req.body);
    return res.status(200).json({ message: 'successfullyupdated' });
    // await updateDoc(meetupRef, req.body)
  }
  if (req.method === 'GET') {
    // const meetupsCollectionRef = collection(db, 'meetups');
    // const meetupsSnap = await getDocs(meetupsCollectionRef);
    // const requiredDoc = meetupsSnap.docs.find((doc) => doc.id === meetupId);
    const requiredDocRef = doc(db, 'meetups', meetupId);
    const requiredDoc = await getDoc(requiredDocRef);
    if (!requiredDoc) {
      return res.status(404).json({ message: 'Request Meetup does not exist' });
    }

    return res.status(200).json({
      message: 'success',
      data: {
        ...requiredDoc.data(),
        id: requiredDoc.id,
      },
    });
  }

  if ((req.method = 'DELETE')) {
    const meetupRef = doc(db, 'meetups', meetupId);
    await deleteDoc(meetupRef);
    return res.status(200).json({ message: 'Deleted successfully' });
  }
}
