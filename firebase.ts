// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbAtrXToJ87LNFZLSjlHkOuHrm9RQ7VLg",
    authDomain: "netflix-clone-6bb37.firebaseapp.com",
    projectId: "netflix-clone-6bb37",
    storageBucket: "netflix-clone-6bb37.appspot.com",
    messagingSenderId: "550180385805",
    appId: "1:550180385805:web:dc1ec4de042cf04c4a1144"
  };
  
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }