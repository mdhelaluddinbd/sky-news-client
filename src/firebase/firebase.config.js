import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXd0tgfAsLeivqdOO_YRNHyGxkYHw1DS8",
  authDomain: "sky-news-client.firebaseapp.com",
  projectId: "sky-news-client",
  storageBucket: "sky-news-client.appspot.com",
  messagingSenderId: "113897371609",
  appId: "1:113897371609:web:0b6f1ca59869dce7bd0bc8",
  measurementId: "G-Y892J2NT9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export default app;
