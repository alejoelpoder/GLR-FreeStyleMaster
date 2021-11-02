import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC2LIT7W0mGhUn3K--APPl0pSSgVsHFt_g",
    authDomain: "fmsweb-1f96a.firebaseapp.com",
    projectId: "fmsweb-1f96a",
    storageBucket: "fmsweb-1f96a.appspot.com",
    messagingSenderId: "709676945192",
    appId: "1:709676945192:web:b343d43d8d0975fd4a4a1d"
})

// export const getFirestore = firebase.firestore();
export function getFirestore(){
    
    return firebase.firestore(app)
    // return firebase.auth.GoogleAuthProvider(googleProvider)
}

// export default app;