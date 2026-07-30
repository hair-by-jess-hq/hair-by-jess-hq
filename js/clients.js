const clients = JSON.parse(localStorage.getItem("clients")) || [];

function saveClients() {
    localStorage.setItem("clients", JSON.stringify(clients));
}

function addClient(name, phone = "", email = "", notes = "") {
    clients.push({
        id: Date.now(),
        name,
        phone,
        email,
        notes
    });

    saveClients();
}

function getClient(id) {
    return clients.find(client => client.id === id);
}