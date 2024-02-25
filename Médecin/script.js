
var navLinks = document.getElementById("navLinks");

function showMenu()
{
	navLinks.style.right = "0";

}
function hideMenu()
{
	navLinks.style.right = "-200px" ;
}
/*
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  
  // Initialise le calendrier
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek', // Affiche la vue par semaine
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    weekends: false, // Masque les weekends
    slotDuration: '00:30:00', // Durée de chaque créneau horaire
    businessHours: {
      daysOfWeek: [1, 2, 3, 4, 5], // Jours de disponibilité (du lundi au vendredi)
      startTime: '09:00', // Heure de début
      endTime: '18:00' // Heure de fin
    }
  });

  calendar.render();
});










// GESTION DES RESERVATIONS DES PATIENTS /////////////////////////////////

const reservationData = [
{ date:'2023-10-15', heure:'14-30', nomPatient: 'Alice Johnson', telephone:'75-152-23-28'},
{date:'2023-09-22', heure:'06-00', nomPatient: 'Bob Dylan', telephone: '78-180-66-10'},
] ;
//fonction pour afficher les reservations dans le tableau
function afficherReservations()
{
  const tableBody = document.getElementById('tableau_Reservation').getElementByTagname ('tbody')[0];
  tableBody.innerHTML = ''; // reinitialiser le tableau
  reservationData.foreach(reservation => ){
    const newRow = tableBody.insertRow();
    // remplir les cellules du tableau

    newRow.insertCell().textContent = reservation.date;
    newRow.insertCell().textContent = reservation.heure;
    newRow.insertCell().textContent = reservation.nomPatient;
    newRow.insertCell().textContent = reservation.telephone;

      // Ajoute un bouton "Confirmer" pour chaque réservation
    const actionsCell = newRow.insertCell();
    const confirmerButton = document.createElement('button');
    confirmerButton.textContent = 'Confirmer';
    confirmerButton.addEventListener('click', () => confirmerReservation(reservation));
    actionsCell.appendChild(confirmerButton);
  }
  
}
// Appelle la fonction pour afficher les réservations au chargement de la page
window.onload = afficherReservations; */


/**********Gestiondes dis^ponibilités************/



document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek', // Affiche la vue par semaine
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    weekends: false, // Masque les weekends
    slotDuration: '00:30:00', // Durée de chaque créneau horaire
    editable: true, // Permet à l'utilisateur de modifier les plages horaires
    eventOverlap: false, // Empêche les événements de se chevaucher
    events: [  // Les événements seront les plages horaires de disponibilité du médecin
      {
        daysOfWeek: [1, 2, 3, 4, 5], // Du lundi au vendredi
        startTime: '09:00', // Heure de début
        endTime: '18:00', // Heure de fin
        rendering: 'background', // Couleur de fond pour indiquer la disponibilité
      }
      // Ajoute d'autres plages horaires ici si nécessaire
    ],
    eventClick: function(info) {
      // Action lorsqu'un utilisateur clique sur une plage horaire (peut être utilisé pour éditer/supprimer la disponibilité)
    }
  });

  calendar.render();
});
