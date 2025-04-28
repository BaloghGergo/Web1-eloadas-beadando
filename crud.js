const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");
let editRow = null;

const initialData = [
    { name: "Kovács Anikó", email: "aniko.kovacs@example.com", phone: "+3620123455", city: "Budapest" },
    { name: "Szabó Péter", email: "peter.szabo@example.com", phone: "+36301234567", city: "Szeged" },
    { name: "Tóth Luca", email: "luca.toth@example.com", phone: "+36701234567", city: "Debrecen" },
    { name: "Nagy Bence", email: "bence.nagy@example.com", phone: "+36401234567", city: "Pécs" }
];

initialData.forEach(data => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = data.name;
    row.insertCell(1).textContent = data.email;
    row.insertCell(2).textContent = data.phone;
    row.insertCell(3).textContent = data.city;

    const actions = row.insertCell(4);
    actions.innerHTML = `
        <button onclick="editData(this)">Szerkesztés</button>
        <button onclick="deleteData(this)">Törlés</button>
    `;
});


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const city = form.city.value.trim();

    if (!name || !email || !phone || !city) return;

    if (editRow) {
        editRow.cells[0].textContent = name;
        editRow.cells[1].textContent = email;
        editRow.cells[2].textContent = phone;
        editRow.cells[3].textContent = city;
        editRow = null;
    } else {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = email;
        row.insertCell(2).textContent = phone;
        row.insertCell(3).textContent = city;

        const actions = row.insertCell(4);
        actions.innerHTML = `
            <button onclick="editData(this)">Szerkesztés</button>
            <button onclick="deleteData(this)">Törlés</button>
        `;
    }

    form.reset();
});

// Sor törlése
function deleteData(btn) {
    const row = btn.closest("tr");
    tableBody.removeChild(row);
}

// Sor szerkesztése
function editData(btn) {
    editRow = btn.closest("tr");
    form.name.value = editRow.cells[0].textContent;
    form.email.value = editRow.cells[1].textContent;
    form.phone.value = editRow.cells[2].textContent;
    form.city.value = editRow.cells[3].textContent;
}

// Rendezés
document.querySelectorAll("#dataTable th").forEach((th, index) => {
    if (index < 4) {
        th.style.cursor = "pointer";
        th.addEventListener("click", () => sortTable(index));
    }
});

function sortTable(colIndex) {
    const rows = Array.from(tableBody.rows);
    const sorted = rows.sort((a, b) => 
        a.cells[colIndex].textContent.localeCompare(b.cells[colIndex].textContent)
    );
    tableBody.innerHTML = "";
    sorted.forEach(row => tableBody.appendChild(row));
}

// Keresés / szűrés (egyszerű példa: város szerint)
const searchInput = document.createElement("input");
searchInput.placeholder = "Keresés";
searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    Array.from(tableBody.rows).forEach(row => {
        const match = Array.from(row.cells).some(cell =>
            cell.textContent.toLowerCase().includes(searchTerm)
        );
        row.style.display = match ? "" : "none";
    });
});
document.getElementById("content").prepend(searchInput);
