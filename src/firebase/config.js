import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY ? process.env.NEXT_PUBLIC_API_KEY : process.env.API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : process.env.AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID ? process.env.NEXT_PUBLIC_PROJECT_ID : process.env.PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : process.env.MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID ? process.env.NEXT_PUBLIC_APP_ID : process.env.APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID ? process.env.NEXT_PUBLIC_MEASUREMENT_ID : process.env.MEASUREMENT_ID
  };

let app = null

if(!firebase.apps.length && typeof window !== 'undefined'){
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
}

export default firebase
