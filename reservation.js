        const reservationForm = document.getElementById('reservation-form');

// Fonction pour gérer la soumission du formulaire de réservation
function handleReservation(event) {
    event.preventDefault();
    const selectedService = document.getElementById('service').value;
    const selectedDate = document.getElementById('date').value;
    const selectedTime = document.getElementById('time').value;

    const reservation = {
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
    };

    // Sauvegarde de la réservation dans le stockage local
    saveReservation(reservation);
}

function saveReservation(reservation) {
    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

reservationForm.addEventListener('submit', handleReservation);

document.addEventListener('DOMContentLoaded', function () {
    const reservationsTable = document.getElementById('reservations-table');
    const reservationsList = document.getElementById('reservations-list');

    // Récupérer les réservations du stockage local
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    

    // Parcourir la liste des réservations et les afficher dans le tableau
    reservations.forEach(function (reservation) {
        const row = document.createElement('tr');
        const serviceCell = document.createElement('td');
        serviceCell.textContent = reservation.service;
        const dateCell = document.createElement('td');
        dateCell.textContent = reservation.date;
        const timeCell = document.createElement('td');
        timeCell.textContent = reservation.time;

        row.appendChild(serviceCell);
        row.appendChild(dateCell);
        row.appendChild(timeCell);
        reservationsList.appendChild(row);
    });

    // Afficher le tableau de réservation
    reservationsTable.style.display = 'block';
});