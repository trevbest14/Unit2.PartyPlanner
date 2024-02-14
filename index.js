// Sample data for initial parties
let parties = [
    { name: "Party 1", date: "2024-02-15", time: "18:00", location: "Venue A", description: "Description 1" },
    { name: "Party 2", date: "2024-02-20", time: "20:00", location: "Venue B", description: "Description 2" }
];

document.addEventListener('DOMContentLoaded', displayParties);

function displayParties() {
    const partyList = document.getElementById('party-list');
    partyList.innerHTML = '';

    parties.forEach((party, index) => {
        const partyItem = document.createElement('div');
        partyItem.className = 'party-item';
        partyItem.innerHTML = `
            <strong>${party.name}</strong> - ${party.date}, ${party.time}<br>
            Location: ${party.location}<br>
            Description: ${party.description}<br>
            <button class="delete-btn" onclick="deleteParty(${index})">Delete</button>
        `;
        partyList.appendChild(partyItem);
    });
}

function deleteParty(index) {
    parties.splice(index, 1);
    displayParties();
}

function addParty() {
    const name = document.getElementById('party-name').value;
    const date = document.getElementById('party-date').value;
    const time = document.getElementById('party-time').value;
    const location = document.getElementById('party-location').value;
    const description = document.getElementById('party-description').value;


    const newParty = { name, date, time, location, description };
    parties.push(newParty);

    displayParties();
}