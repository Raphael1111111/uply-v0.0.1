// Sign up function
async function signUp(auth, email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Konto erfolgreich erstellt!");
      window.location.href = "login.html";
    } catch (error) {
      alert(`Fehler: ${error.message}`);
    }
  }
  
  // Login function
  async function login(auth, email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Erfolgreich angemeldet!");
      window.location.href = "feed.html"; // Redirect to the feed page after successful login
    } catch (error) {
      alert(`Fehler: ${error.message}`);
    }
  }
  
  export { signUp, login };
  