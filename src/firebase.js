import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID 
    // apiKey: "AIzaSyBqaZ6hBi2FH8mTQa_-LVydiLIF4BVe4JA",
    // authDomain: "clothing-store-1fe13.firebaseapp.com",
    // projectId: "clothing-store-1fe13",
    // storageBucket: "clothing-store-1fe13.appspot.com",
    // messagingSenderId: "15445670482",
    // appId: "1:15445670482:web:c32cdc46bef3e5f0c2fd8b"
    apiKey: "AIzaSyCaYHLwAaNPWa8XTlF-i9SvC7Mk_OAYCVE",
  authDomain: "snist-stackathon.firebaseapp.com",
  projectId: "snist-stackathon",
  storageBucket: "snist-stackathon.appspot.com",
  messagingSenderId: "662946027917",
  appId: "1:662946027917:web:081ee77b6c9191b2dd85c4",
  measurementId: "G-WN8H3G06SS"
})

console.log(app.auth())

export const auth = app.auth()
export default app