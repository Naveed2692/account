
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC8s11Ks0zYyaaTA70Z53Q7Xj7lsru0j6Y",
    authDomain: "first-saylani-project.firebaseapp.com",
    projectId: "first-saylani-project",
    storageBucket: "first-saylani-project.appspot.com",
    messagingSenderId: "193845085266",
    appId: "1:193845085266:web:d4af211732cc8b237f0b8b"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);