import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";



// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  const userEmailElement = document.getElementById('user-email');
  const logoutBtn = document.getElementById('logout-btn'); // Hinzugefügt
  const isLoginPage = window.location.pathname.endsWith('/login.html');

  if (!user && !isLoginPage) {
    window.location.href = 'login.html';
  } else if (user && isLoginPage) {
    window.location.href = 'index.html';
  }

  if (user) {
    userEmailElement.textContent = user.email; // E-Mail-Adresse des Benutzers anzeigen
    logoutBtn.style.display = 'inline-block'; // Hinzugefügt
  } else {
    userEmailElement.textContent = ''; // E-Mail-Adresse entfernen, wenn Benutzer abgemeldet ist
    logoutBtn.style.display = 'none'; // Hinzugefügt
  }



});


// Hinzugefügt
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', async () => {
  await auth.signOut();
});
