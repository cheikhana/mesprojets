// Fonction pour sauvegarder les données dans localStorage
function sauvegarderRendezVous(service, date, heure, nombre, statut) {
    const rendezVous = {
        service,
        date,
        heure,
        nombre,
        statut,
    };
    const rendezVousArray = JSON.parse(localStorage.getItem('rendezVousArray')) || [];
    rendezVousArray.push(rendezVous);
    localStorage.setItem('rendezVousArray', JSON.stringify(rendezVousArray));
}

// Fonction pour afficher les rendez-vous sauvegardés dans le tableau de bord
function afficherRendezVous() {
    const rendezVousArray = JSON.parse(localStorage.getItem('rendezVousArray')) || [];

    const rdvs = document.getElementById('rv_suiv');
    const rdvp = document.getElementById('rv_pass');

    rendezVousArray.forEach((rendezVous) => {
        const { service, date, heure, nombre, statut } = rendezVous;
        const listItem = document.createElement('li');
        listItem.textContent = `${service} - ${date} - ${heure} (${statut})`;

        if (statut === 'à venir') {
            rdvs.appendChild(listItem);
        } else {
            rdvp.appendChild(listItem);
        }
    });
}

// Appeler la fonction d'affichage au chargement de la page
window.addEventListener('load', afficherRendezVous);

document.getElementById('reserve').addEventListener('submit', function (e) {
    e.preventDefault();

    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure').value;
    const nombre = document.querySelector("input[name='nmb']:checked").value;

    const today = new Date();
    const rdvDate = new Date(date);

    if (rdvDate < today) {
        sauvegarderRendezVous(service, date, heure, nombre, 'passé');
    } else {
        sauvegarderRendezVous(service, date, heure, nombre, 'à venir');
    }

    // Réinitialiser le formulaire
    document.getElementById('reserve').reset();
});

// Exemple de données de disponibilité des médecins
const availabilityData = {
    Dentiste: {
        Lundi: ['09:00', '10:30', '14:00'],
        Mardi: ['11:00', '15:30'],
    },
    "Médecin généraliste": {
        Lundi: ['10:00', '16:30'],
        Mardi: ['08:30', '13:30'],
    },
    // Ajoutez plus de données de disponibilité pour d'autres médecins et jours ici
};

// Fonction pour générer le calendrier de disponibilité
function generateAvailabilityCalendar(selectedService) {
    const availabilityCalendar = document.getElementById('availability-calendar');
    availabilityCalendar.innerHTML = ''; // Réinitialiser le contenu

    if (availabilityData[selectedService]) {
        const days = Object.keys(availabilityData[selectedService]);
        days.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';

            const dayHeader = document.createElement('h3');
            dayHeader.textContent = day;
            dayElement.appendChild(dayHeader);

            const timeSlots = availabilityData[selectedService][day];
            const timeList = document.createElement('ul');
            timeSlots.forEach(slot => {
                const listItem = document.createElement('li');
                listItem.textContent = `Disponible à : ${slot}`;
                timeList.appendChild(listItem);
            });

            dayElement.appendChild(timeList);
            availabilityCalendar.appendChild(dayElement);
        });
    } else {
        availabilityCalendar.innerHTML = 'Aucune disponibilité pour ce service.';
    }
}

// Gérer le changement de service sélectionné
const serviceSelect = document.getElementById('service');
serviceSelect.addEventListener('change', () => {
    const selectedService = serviceSelect.value;
    generateAvailabilityCalendar(selectedService);
});

// Affichez le calendrier pour le service initial
generateAvailabilityCalendar(serviceSelect.value);

// Exemple de données de service
const serviceData = [
    { service: 'Dentiste', description: 'Soins dentaires généraux' },
    { service: 'Médecin généraliste', description: 'Consultations médicales générales' },
    { service: 'Spécialiste', description: 'Services médicaux spécialisés' },
    // Ajoutez d'autres services avec leurs descriptions ici
];

// Fonction pour gérer la recherche de services
function handleServiceSearch() {
    const selectedServiceType = document.getElementById('service-type').value;
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Réinitialiser les résultats

    const results = serviceData.filter(service => service.service === selectedServiceType);

    if (results.length > 0) {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'service-result';
            resultElement.innerHTML = `<h3>${result.service}</h3><p>${result.description}</p>`;
            searchResults.appendChild(resultElement);
        });
    } else {
        searchResults.innerHTML = 'Aucun service trouvé pour la sélection actuelle.';
    }
}

// Gérer la recherche de services lorsque le bouton est cliqué
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleServiceSearch);



