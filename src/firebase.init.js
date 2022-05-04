// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBJF52llAvMvMv5W-uMzndVMSKDl-Ii1XI",
	authDomain: "wearhouse-management-mern.firebaseapp.com",
	projectId: "wearhouse-management-mern",
	storageBucket: "wearhouse-management-mern.appspot.com",
	messagingSenderId: "12405818605",
	appId: "1:12405818605:web:8a5e777c19ad105445b8e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
