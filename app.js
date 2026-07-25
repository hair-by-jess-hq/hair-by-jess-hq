// Hair By Jess HQ
// Build 009

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

function renderHome() {

  document.getElementById("app").innerHTML = `

    <section class="hero">

      <h2>Good Morning Jess ☀️</h2>

      <div class="stat">
        <h3>${clients.length}</h3>
        <p>Total Clients</p>
      </div>

      <br>

      <button onclick="renderClients()">
        👩 Clients
      </button>

    </section>

  `;

}

function renderClients() {

  let html = `

    <section class="hero">

      <h2>Clients</h2>

      <input
        id="search"
        placeholder="Search..."
        onkeyup="searchClients()"
      >

      <br><br>

      <button onclick="showAddClient()">
        ➕ Add Client
      </button>

      <br><br>

      <div id="clientList">

  `;

  clients.forEach(client => {

    html += clientCard(client);

  });

  html += `

      </div>

    </section>

  `;

  document.getElementById("app").innerHTML = html;

}

function clientCard(client){

  return `

    <div class="appointment-card">

      <div>

        <strong>${client.firstName} ${client.lastName}</strong>

        <br>

        ${client.phone}

      </div>

    </div>

  `;

}

function searchClients(){

  const text = document
    .getElementById("search")
    .value
    .toLowerCase();

  let html="";

  clients
    .filter(c =>
      (`${c.firstName} ${c.lastName}`)
      .toLowerCase()
      .includes(text)
    )
    .forEach(c => {

      html += clientCard(c);

    });

  document.getElementById("clientList").innerHTML = html;

}

function showAddClient(){

  document.getElementById("app").innerHTML = `

    <section class="hero">

      <h2>New Client</h2>

      <input id="first" placeholder="First Name">

      <br><br>

      <input id="last" placeholder="Last Name">

      <br><br>

      <input id="phone" placeholder="Mobile">

      <br><br>

      <button onclick="saveClient()">

        Save Client

      </button>

      <br><br>

      <button onclick="renderClients()">

        Cancel

      </button>

    </section>

  `;

}

function saveClient(){

  const first=document.getElementById("first").value.trim();

  if(first===""){

    alert("Please enter a first name");

    return;

  }

  clients.push({

    firstName:first,

    lastName:document.getElementById("last").value.trim(),

    phone:document.getElementById("phone").value.trim()

  });

  saveClients();

  renderClients();

}

document.addEventListener("DOMContentLoaded",()=>{

  renderHome();

  document.querySelectorAll("nav a")[0].onclick=renderHome;
  document.querySelectorAll("nav a")[2].onclick=renderClients;

});