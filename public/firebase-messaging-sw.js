// importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');
// const firebaseConfig = {
//     apiKey: "AIzaSyCLeYMOOMK7A7YrFrfM6Yy0Vbs_LDaypko",
//     authDomain: "knocknoc-8ecab.firebaseapp.com",
//     projectId: "knocknoc-8ecab",
//     storageBucket: "knocknoc-8ecab.appspot.com",
//     messagingSenderId: "1053792638457",
//     appId: "1:1053792638457:web:36e1dacee86ccd32b99928",
//     measurementId: "G-SXNQZFSRV4"
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.'
//   };
//   return self.registration.showNotification(notificationTitle,
//       notificationOptions);
// });