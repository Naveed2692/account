import { auth } from "./firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var signIn= document.getElementById('login')
signIn.addEventListener('click',(e)=>{
e.preventDefault();
var loginEmail= document.getElementById('loginEmail').value;
var loginPass= document.getElementById('loginPass').value;
signInWithEmailAndPassword(auth, loginEmail, loginPass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('Sign in successfully')
    window.location.href='form.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
  });
loginEmail=document.getElementById('email').value='';
loginPass=document.getElementById('password').value='';
})