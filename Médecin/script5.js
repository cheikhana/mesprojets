// Simule des données de statistiques
document.addEventListener("DOMContentLoaded", function () {
let totalReservations = 85;
let totalSlots=125;
let averageRating = 4.5;

// Met à jour les éléments HTML avec les données simulées
let occupancyRate = ((totalReservations / totalSlots) * 100).toFixed(2);


document.getElementById('totalReservations').textContent = totalReservations;
document.getElementById('occupancyRate').textContent = `${occupancyRate}%`;
document.getElementById('averageRating').textContent = averageRating;
window.onload = updateDataOnPage;
function updateDataOnPage() {
    document.getElementById('totalReservations').textContent = totalReservations;
    document.getElementById('occupancyRate').textContent = `${occupancyRate}%`;
    document.getElementById('averageRating').textContent = averageRating;
}

// Fonction pour mettre à jour les données en fonction des réservations
function updateDataForReservation(confirmed, canceled) {
    // Mise à jour des données en fonction des réservations confirmées et annulées
    totalReservations += confirmed - canceled;

    // Recalculer le taux d'occupation si vous avez plus d'informations
    // Par exemple, le nombre total de chambres disponibles, etc.

    // Mettre à jour les données sur la page
    updateDataOnPage();
}

// Exemple d'appel de la fonction lorsque des réservations sont confirmées ou annulées
// Cela dépendra de votre logique de gestion des réservations
const nouvellesReservationsConfirmees = 5;
const reservationsAnnulees = 2;

updateDataForReservation(nouvellesReservationsConfirmees, reservationsAnnulees);
});
