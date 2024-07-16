import { db } from '@/firebase/clientApp';
import { addDoc, collection } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const meetupsCollRef = collection(db, 'meetups');
    const newDoc = await addDoc(meetupsCollRef, data);
    if (!newDoc) {
      return res.status(404).json({ message: 'Error has occured' });
    }
    return res.status(200).json({
      message: 'Meetup added successfully',
    });
  }
}
