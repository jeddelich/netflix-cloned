// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbanVDwgjsHzpVl69YmLyOZNsSMhz1xxw",
  authDomain: "netflix-clone-yt-c8001.firebaseapp.com",
  projectId: "netflix-clone-yt-c8001",
  storageBucket: "netflix-clone-yt-c8001.firebasestorage.app",
  messagingSenderId: "926408009451",
  appId: "1:926408009451:web:f58697c2ff3a20c72d80ae"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }