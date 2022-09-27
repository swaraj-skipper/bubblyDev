import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAN7nB701NYRd2tve5LBlkccmKqO31m2gs",
    authDomain: "igupload.firebaseapp.com",
    projectId: "igupload",
    storageBucket: "igupload.appspot.com",
    messagingSenderId: "939317587185",
    appId: "1:939317587185:web:8215ab9d6b9b477cf98d50",
    measurementId: "G-SDJZSNZPRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);