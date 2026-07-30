const clients = JSON.parse(localStorage.getItem("clients")) || [];

function saveClients() {
    localStorage.setItem("clients", JSON.stringify(clients));
}

function addClient(name, phone = "", notes = "") {
    clients.push({
        id: Date.now(),
        name,
        phone,
        notes
    });

    saveClients();
}