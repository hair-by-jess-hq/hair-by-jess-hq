function renderHome() {
    document.getElementById("app").innerHTML = `
        <h2>Welcome to Hair By Jess HQ</h2>

        <button onclick="showClients()">
            👩 Clients
        </button>
    `;
}

function showClients() {

    let html = `
        <h2>Clients</h2>

        <button onclick="newClient()">
            ➕ Add Client
        </button>

        <ul>
    `;

    clients.forEach(client => {
        html += `<li>${client.name}</li>`;
    });

    html += "</ul>";

    document.getElementById("app").innerHTML = html;
}

function newClient() {

    const name = prompt("Client name");

    if (!name) return;

    addClient(name);

    showClients();
}

renderHome();