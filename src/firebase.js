import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { ref, getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeP2KmREJkIsyOMCPLH7y-zYp_yoLiJoM",
  authDomain: "file-storage-c3bbf.firebaseapp.com",
  projectId: "file-storage-c3bbf",
  storageBucket: "file-storage-c3bbf.appspot.com",
  messagingSenderId: "104583679805",
  appId: "1:104583679805:web:f6f85209e97b82c2ec7f54"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const storageRef = ref(storage);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, provider, storageRef, db };