import { auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword , sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var createAcc= document.getElementById('signup');
createAcc.addEventListener('click',(event)=>{
  event.preventDefault();
var email= document.getElementById('email').value;
var password= document.getElementById('password').value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert('Sign up successfully Please verify email to Login');
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage, errorCode)
  });
  email=document.getElementById('email').value='';
email=document.getElementById('password').value='';
})