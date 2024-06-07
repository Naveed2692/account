import { auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// onload=window.location.href='index.html';

let button= document.getElementById('signup');
// function signup(){
    
//     var useEmaial= document.getElementById('email').value;
//     var usePassword= document.getElementById('pass').value;

    
//     createUserWithEmailAndPassword(auth, useEmaial, usePassword)
//     .then((userCredential) => {
//         // Signed up 
//         const user = userCredential.user;
//         console.log(user);
//         console.log(user.uid);
//         // ...
//         alert("Account Successfull Created Sign in Now")
//         window.location.href='signin.html';
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//        alert('Error', errorCode, errorMessage);

//     });
// }
    // console.log("error===>" ,errorCode)
    button.addEventListener('click',()=>{
    
    var useEmaial= document.getElementById('email').value;
    var usePassword= document.getElementById('pass').value;
    if(usePassword.length >= 6){
      createUserWithEmailAndPassword(auth, useEmaial, usePassword)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        console.log(user.uid);
        // ...
        alert("Account Successfull Created Sign in Now")
        window.location.href='signin.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      //  alert('Please enter 6 digit code and correct email');

    });
    }else{
      alert('Please enter 6 digit pasword');
    }

    
    
    });
    
//Signin code
var signNow= document.getElementById('signin');
// function signIn(){

  
//   signInWithEmailAndPassword(auth, useEmaial, usePassword)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
  
// }
signNow.addEventListener('click',()=>{
  var email = document.getElementById('email').value;
  var password= document.getElementById('pass').value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("123");
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("Sign in successfully")
    window.location.href= 'main.html';

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Password Or Email is incorrect")
  });
})

