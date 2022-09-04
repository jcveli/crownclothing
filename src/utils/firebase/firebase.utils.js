import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB41ZkC9vHPmc4N7y2MsTI0-r530kgHafo",
    authDomain: "crown-clothing-db-1a909.firebaseapp.com",
    projectId: "crown-clothing-db-1a909",
    storageBucket: "crown-clothing-db-1a909.appspot.com",
    messagingSenderId: "556432872502",
    appId: "1:556432872502:web:08a850164a34201389f497"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); 
provider.setCustomParameters({
prompt: "select_account"
});



export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider);


export const db = getFirestore(); 



export const createUserDocumentFromAuth = async (userAuth) => { 
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);


    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 

        try{
            await setDoc(userDocRef, {displayName, email, createdAt});
        }catch(err){
            console.log('error creating the user with Google', err.message);
        }
    }

    return userDocRef;
}