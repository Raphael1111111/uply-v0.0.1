// Import Firebase libraries
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnKe5ih0_ALe-A3ZdmRPprDjZPJAocclY",
  authDomain: "uply-v1.firebaseapp.com",
  databaseURL: "https://uply-v1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uply-v1",
  storageBucket: "uply-v1.appspot.com",
  messagingSenderId: "86083597994",
  appId: "1:86083597994:web:fb33926c5211fb6629c2d3",
  measurementId: "G-B0XVY6L23T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign up function
async function signUp(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Konto erfolgreich erstellt!");
    window.location.href = "login.html";
  } catch (error) {
    alert(`Fehler: ${error.message}`);
  }
}

// Login function
async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Erfolgreich angemeldet!");
    window.location.href = "feed.html"; // Redirect to the feed page after successful login
  } catch (error) {
    alert(`Fehler: ${error.message}`);
  }
}

// Handle form submissions
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signUpForm = document.getElementById("signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      login(email, password);
    });
  }

  if (signUpForm) {
    signUpForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      signUp(email, password);
    });
  }
});
