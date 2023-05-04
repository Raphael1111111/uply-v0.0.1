// Importieren Sie die benötigten Funktionen aus der Firestore-Bibliothek
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Initialisieren Sie Firestore
const db = getFirestore(app);

// Funktion zum Hinzufügen eines Benutzers
async function addUser(userId, name) {
  try {
    const userRef = await addDoc(collection(db, "users"), {
      id: userId,
      name: name,
    });
    console.log(`User added with ID: ${userRef.id}`);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
}

// Rufen Sie die addUser-Funktion auf, um einen Benutzer hinzuzufügen
addUser("user1", "John Doe");
