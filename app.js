// Hair By Jess HQ
// Build 006

let clients = JSON.parse(localStorage.getItem("clients")) || [
  {
    firstName: "Emma",
    lastName: "Wilson",
    phone: "021 123 4567"
  }
];

function saveClients() {
  localStorage.setItem("clients", JSON.stringify(clients));
}

function homeScreen() {
  document.getElementById("app").innerHTML = `
    <section class="hero">
      <h2>Good Morning Jess ☀️</h2>

      <div class="appointment-card">
        <strong>${clients.length}</strong><br>
        Total Clients
      </div>

      <div class="quick-grid">
        <button onclick="clientScreen()">👩<span>Clients</span></button>
        <button>📅<span>Calendar</span></button>
        <button>➕<span>Appointment</span></button>
        <button>⚙️<span>Settings</span></button>
      </div>
    </section>
  `;
}

function clientScreen() {

  let html = `
    <section class="hero">

      <h2>👩 Clients</h2>

      <input
        id="search"
        type="text"
        placeholder="Search clients..."
        onkeyup="filterClients()"
        style="
          width:100%;
          padding:14px;
          border-radius:12px;
          border:1px solid #ddd;
          margin:15px 0;
          font-size:16px;
        "
      >

      <button onclick="newClient()">
        ➕ New Client
      </button>

      <br><br>

      <div id="clientList">
  `;

  clients.forEach(client => {

    html += `
      <div class="appointment-card">

        <strong>${client.firstName} ${client.lastName}</strong>

        <br>

        ${client.phone}

      </div>
    `;

  });

  html += `
      </div>

    </section>
  `;

  document.getElementById("app").innerHTML = html;

}
}

function newClient(){

  const firstName = prompt("First Name");

  if(!firstName) return;

  const lastName = prompt("Last Name");

  const phone = prompt("Phone");

  clients.push({
    firstName,
    lastName,
    phone
  });

  saveClients();

  clientScreen();

}

document.addEventListener("DOMContentLoaded", () => {

  homeScreen();

});
function filterClients(){

  const search = document
    .getElementById("search")
    .value
    .toLowerCase();

  let html = "";

  clients
    .filter(client =>

      (`${client.firstName} ${client.lastName}`)
      .toLowerCase()
      .includes(search)

    )

    .forEach(client => {

      html += `
        <div class="appointment-card">

          <strong>${client.firstName} ${client.lastName}</strong>

          <br>

          ${client.phone}

        </div>
      `;

    });

  document.getElementById("clientList").innerHTML = html;

}
