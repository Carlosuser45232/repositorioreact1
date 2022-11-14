// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBSVTQEtBMY70FfXef1K8suikrvXpxRlJY',
    authDomain: 'fb-reactfavoritos.firebaseapp.com',
    projectId: 'fb-reactfavoritos',
    storageBucket: "fb-reactfavoritos.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();   
export default app;
