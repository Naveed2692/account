import { auth } from "./firebase.mjs";
   var signOutButton = document.getElementById('signout');
    signOutButton.addEventListener('click', () => {
      auth.signOut().then(() => {
        // Sign-out successful.
        alert('Signout Successfully');
        window.location.href = 'index.html';
      }).catch((error) => {
        // An error happened.
        console.error('Signout Error', error);
      });
    });