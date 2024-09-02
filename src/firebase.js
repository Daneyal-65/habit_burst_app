import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBzL5JOaaiJqI38BvfxFvfUsE4EuHzX3ac",
  authDomain: "habitburst.firebaseapp.com",
  projectId: "habitburst",
  storageBucket: "habitburst.appspot.com",
  messagingSenderId: "625705751126",
  appId: "1:625705751126:web:31f7c4981b07280d2b61f7",
  measurementId: "G-Y5VCSC8WH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BHsWELjLUdGDtho4QDrkKPJ5HuJn4qiB6ZMD80roJ7iwMGqx0IgPYR6nh3hWPV4nqGQQMb5Ukv_3NtAzCFBg82Q",
    });
    // sentToServer(token);
    return token;
  }
};
