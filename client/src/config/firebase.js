import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNZt9iyymSnhNzEEyjC58qNXSR4lt5Xdk",
    authDomain: "fleetstore-693b8.firebaseapp.com",
    projectId: "fleetstore-693b8",
    storageBucket: "fleetstore-693b8.appspot.com",
    messagingSenderId: "952393922404",
    appId: "1:952393922404:web:60c9055df78f3cedb2ac71",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithGoogle(auth,GoogleProvider)
        const user = result.user
        console.log("User Info", user);
        return user;
    }catch(error){
        console.log(first)
    }
}