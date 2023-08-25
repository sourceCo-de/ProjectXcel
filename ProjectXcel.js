  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
  import {getAuth,  signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBOxmYXBgnmR_EdKRWYMwofb7hFEwrUj9M",
    authDomain: "project--xcel.firebaseapp.com",
    projectId: "project--xcel",
    storageBucket: "project--xcel.appspot.com",
    messagingSenderId: "156128457347",
    appId: "1:156128457347:web:efd403c4bffd7c5aa921b6",
    measurementId: "G-B845X690FS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app)

//Getting email and Password Input from HTML PAge
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const name = document.querySelector(".profile-name")

// const createAccount = async() =>{
//   createUserWithEmailAndPassword(auth,)
// }



const checkUser=()=>{

  try {
    
    onAuthStateChanged(auth, (user)=>{
      if(user){
       name.innerHTML = user.email
      }
    })
  } catch (error) {
    console.log(error);
  }
}

checkUser();

const signInUser = async(e) =>{



  e.preventDefault();
  console.log(email.value, password.value);
  try {
    await signInWithEmailAndPassword(auth, email.value,password.value)
  
    alert("Login SuccessFull");
    
    window.location="Homepage.html"
  } catch (error) {
    alert(error.code);
  }
}

loginBtn.addEventListener("click",signInUser)