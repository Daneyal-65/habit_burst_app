importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBzL5JOaaiJqI38BvfxFvfUsE4EuHzX3ac",
  authDomain: "habitburst.firebaseapp.com",
  projectId: "habitburst",
  storageBucket: "habitburst.appspot.com",
  messagingSenderId: "625705751126",
  appId: "1:625705751126:web:31f7c4981b07280d2b61f7",
  measurementId: "G-Y5VCSC8WH1",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle =
    payload.notification.title || "the payload message ";
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
