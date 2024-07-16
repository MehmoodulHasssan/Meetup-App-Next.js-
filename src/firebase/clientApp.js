import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDijGWeffLcQ0qwSVQemj3hMNyjpJO7Bvg',
  authDomain: 'tutorial-node-daa48.firebaseapp.com',
  projectId: 'tutorial-node-daa48',
  storageBucket: 'tutorial-node-daa48.appspot.com',
  messagingSenderId: '1032706081352',
  appId: '1:1032706081352:web:49df77c168cabf3fe34e7d',
  measurementId: 'G-38BN93MG51',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
