// Simulez des données de service
const serviceData = [
    { day: 'Lundi', hours: '9h00 - 17h00' },
    { day: 'Mardi', hours: '10h00 - 18h00' },
    { day: 'Mercredi', hours: '8h30 - 16h30' },
    // Ajoutez d'autres données de service pour d'autres jours ici
  ];
  
  // Fonction pour afficher les heures de service
  function displayServiceHours() {
      const serviceHours = document.getElementById('service-hours');
  
      serviceData.forEach(service => {
          const listItem = document.createElement('li');
          listItem.textContent = `${service.day}: ${service.hours}`;
          serviceHours.appendChild(listItem);
      });
  }
  
  displayServiceHours();
  