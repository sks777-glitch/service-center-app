import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("customerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const model = document.getElementById("phoneModel").value;
  const issue = document.getElementById("issue").value;

  try {
    await addDoc(collection(db, "customers"), {
      name,
      model,
      issue,
      timestamp: new Date()
    });
    alert("Saved successfully!");
    form.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
