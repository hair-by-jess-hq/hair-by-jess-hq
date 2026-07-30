function renderHome() {
    document.getElementById("app").innerHTML = `
        <section class="dashboard">

            <h2>🏠 Dashboard</h2>

            <div class="card">
                <h3>📅 Today's Appointments</h3>
                <p>No appointments today.</p>
            </div>

            <div class="grid">

                <button onclick="showClients()">👩<br>Clients</button>

                <button disabled>📅<br>Calendar</button>

                <button disabled>💰<br>Payments</button>

                <button disabled>🎨<br>Formulas</button>

                <button disabled>📸<br>Photos</button>

                <button disabled>⚙️<br>Settings</button>

            </div>

        </section>
    `;
}

function showClients() {

    let html = `
        <div class="clients-page">

            <h2>👩 Clients</h2>

            <button onclick="showAddClientForm()">
                ➕ Add Client
            </button>

            <hr>
    `;

    if (clients.length === 0) {

        html += `
            <p>No clients yet.</p>
        `;

    } else {

        clients.forEach(client => {

            html += `
                <div class="client-card">

                    <h3>${client.name}</h3>

                    <p>📱 ${client.phone || "No phone"}</p>

                    <p>📧 ${client.email || "No email"}</p>

                </div>
            `;

        });

    }

    html += `

            <br>

            <button onclick="renderHome()">
                ⬅ Back
            </button>

        </div>
    `;

    document.getElementById("app").innerHTML = html;
}

renderHome();