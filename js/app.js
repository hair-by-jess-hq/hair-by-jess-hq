function renderHome() {
    document.getElementById("app").innerHTML = `
        <section class="dashboard">

            <h2>🏠 Dashboard</h2>

            <div class="card">
                <h3>📅 Today's Appointments</h3>
                <p>No appointments today.</p>
            </div>

            <div class="grid">

                <button onclick="showClients()">
                    👩<br>Clients
                </button>

                <button>
                    📅<br>Calendar
                </button>

                <button>
                    💰<br>Payments
                </button>

                <button>
                    🎨<br>Formulas
                </button>

                <button>
                    📸<br>Photos
                </button>

                <button>
                    ⚙️<br>Settings
                </button>

            </div>

        </section>
    `;
}

function showClients() {

    let html = `
        <h2>👩 Clients</h2>

        <button onclick="showAddClientForm()">
            ➕ Add Client
        </button>

        <hr>
    `;

    if (clients.length === 0) {
        html += `<p>No clients yet.</p>`;
    }

    clients.forEach(client => {

        html += `
            <div class="client-card">

                <h3>${client.name}</h3>

                <p>📱 ${client.phone || ""}</p>

                <p>📧 ${client.email || ""}</p>

            </div>
        `;

    });

    html += `
        <br>

        <button onclick="renderHome()">
            ⬅ Back
        </button>
    `;

    document.getElementById("app").innerHTML = html;
}

renderHome();