import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import { firebaseConfig } from '../constants/defaultValues'

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();

const increment = () => firebase.firestore.FieldValue.increment(1)
const decrement = () => firebase.firestore.FieldValue.increment(-1)

const user = (uid) => firestore.collection('users').doc(uid)
const wheels = () => firestore.collection('wheels')
const wheel = (wid) => firestore.collection('wheels').doc(wid);
const getWheel = (wid) => firestore.collection('wheels').doc(wid).get();


export {
   auth,
   database,
   firestore,
   increment,
   decrement,
   user,
   wheels,
   wheel,
   getWheel
};
