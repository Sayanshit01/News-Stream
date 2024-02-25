
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBW92qpn7Kc9h_lpfMzTNInsg9UgVqsvpQ",
    authDomain: "news-stream-c8843.firebaseapp.com",
    projectId: "news-stream-c8843",
    storageBucket: "news-stream-c8843.appspot.com",
    messagingSenderId: "315867215507",
    appId: "1:315867215507:web:1d2f6fac9e8a2af233ff66"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'

  const provider = new GoogleAuthProvider();
  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click",function(){
   
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    window.location.href = "../index.html";

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  })

  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demo purposes
        // Here you can add logic to handle form submission, such as AJAX request for authentication
        // For now, we'll just display a message
        alert('Login form submitted');
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
