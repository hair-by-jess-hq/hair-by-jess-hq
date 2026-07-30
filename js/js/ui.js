function showAddClientForm() {
    document.getElementById("app").innerHTML = `
        <div class="form-card">

            <h2>👤 Add New Client</h2>

            <label>Full Name</label>
            <input id="clientName" type="text" placeholder="Jane Smith">

            <label>Mobile</label>
            <input id="clientPhone" type="tel" placeholder="021 123 4567">

            <label>Email</label>
            <input id="clientEmail" type="email" placeholder="jane@email.com">

            <label>Notes</label>
            <textarea id="clientNotes" rows="4" placeholder="Colour history, allergies, preferences..."></textarea>

            <br><br>

            <button onclick="saveNewClient()">
                💾 Save Client
            </button>

            <button onclick="showClients()">
                ⬅ Back
            </button>

        </div>
    `;
}

function saveNewClient() {

    const name = document.getElementById("clientName").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const notes = document.getElementById("clientNotes").value.trim();

    if (name === "") {
        alert("Please enter a client name.");
        return;
    }

    addClient(name, phone, email, notes);

    showClients();
}
