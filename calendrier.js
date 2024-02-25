// Simulez des données de calendrier
const calendarData = [
    { day: 'Lundi', appointments: ['10h00', '14h30'] },
    { day: 'Mardi', appointments: ['11h15', '15h45'] },
    { day: 'Mercredi', appointments: ['9h30', '13h00'] },
    // Ajoutez d'autres données de calendrier pour d'autres jours ici
];

// Fonction pour générer le calendrier de disponibilité
function generateCalendar() {
    const calendar = document.getElementById('calendar');

    calendarData.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const dayHeader = document.createElement('h2');
        dayHeader.textContent = day.day;
        dayElement.appendChild(dayHeader);
        
        const appointmentList = document.createElement('ul');
        
        day.appointments.forEach(appointment => {
            const listItem = document.createElement('li');
            listItem.textContent = `Rendez-vous à ${appointment}`;
            appointmentList.appendChild(listItem);
        });
        
        dayElement.appendChild(appointmentList);
        calendar.appendChild(dayElement);
    });
}

generateCalendar();
