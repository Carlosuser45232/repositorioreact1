// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDxmn0ideiJnZzSMmLypjBoAYeScs2MnpM',
    authDomain: 'fb-bdreact4-852af.firebaseapp.com',
    projectId: 'fb-bdreact4-852af',
    storageBucket: "fb-bdreact4-852af.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();   
export default app;
