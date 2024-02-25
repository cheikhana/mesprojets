document.addEventListener('DOMContentLoaded', function () {
    var reservationsTable = document.getElementById('reservations-table');

    // Récupérer les réservations du stockage local
    var reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    

    // Parcourir la liste des réservations et les afficher dans le tableau
    reservations.forEach(function (reservation) {
        var row = document.createElement('tr');
        var serviceCell = document.createElement('td');
        serviceCell.textContent = reservation.service;
        var dateCell = document.createElement('td');
        dateCell.textContent = reservation.date;
        var timeCell = document.createElement('td');
        timeCell.textContent = reservation.time;

        row.appendChild(serviceCell);
        row.appendChild(dateCell);
        row.appendChild(timeCell);
        reservationsTable.appendChild(row);
    });
    // Afficher le tableau de réservation
});

