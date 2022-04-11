import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGTvA79pDUGHVQgNCoLxBEkyi-JLt1Uws',
  authDomain: 'html-css-js-98aaf.firebaseapp.com',
  projectId: 'html-css-js-98aaf',
  storageBucket: 'html-css-js-98aaf.appspot.com',
  messagingSenderId: '294499340289',
  appId: '1:294499340289:web:b6f09bfd4ba39d21f57000',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
