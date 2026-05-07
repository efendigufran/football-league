import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const groupA = document.getElementById("groupA");

async function loadTeams() {

  const querySnapshot =
    await getDocs(collection(db, "teams"));

  let html = "<h2>Group A</h2>";

  querySnapshot.forEach((doc) => {

    const team = doc.data();

    console.log(team);

    if (team.group === "A") {
      html += `<p>${team.name}</p>`;
    }

  });

  groupA.innerHTML = html;
}

loadTeams();