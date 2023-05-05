import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const auth = getAuth();

async function logout() {
  try {
    await signOut(auth);
    alert('Erfolgreich abgemeldet.');
    window.location.href = 'login.html';
  } catch (error) {
    console.error('Error during sign out:', error);
    alert('Fehler beim Abmelden. Bitte versuchen Sie es erneut.');
  }
}

document.getElementById('logout-btn').addEventListener('click', logout);
