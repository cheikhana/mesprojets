// parti pour la sauvegardes des information des utilisateur  sur stockage locale 
    function sauvegarderUtilisateur() {        
        var prenom = document.getElementById('prenom').value;
        var nom = document.getElementById('nom').value;
        var email = document.getElementById('email').value;
        var numero = document.querySelector('input[type="tel"]').value;
        var motDePasse = document.querySelector('input[type="password"]').value;
    
        // Vous pouvez ajouter plus d'informations si nécessaire
        var dateInscription = new Date().toDateString();
        var statut = 'en ligne'; // Vous pouvez définir le statut ici
    
        // Définissez directement le champ "type" à "utilisateur"
        var type = 'utilisateur';
    
        // Créez un objet pour stocker les données de l'utilisateur
        var utilisateur = {
            prenom: prenom,
            nom: nom,
            email: email,
            numero: numero,
            motDePasse: motDePasse,
            dateInscription: dateInscription,
            statut: statut,
            type: type
        };
    
        // Récupérez les utilisateurs existants du stockage local
        var utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
    
        // Ajoutez le nouvel utilisateur à la liste des utilisateurs
        utilisateurs.push(utilisateur);
    
        // Enregistrez la liste mise à jour dans le stockage local
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
    
        // Redirigez l'utilisateur vers la page de confirmation (vous pouvez créer une page de confirmation comme dans l'exemple précédent)
        window.location.href = "connexion.html";
    }
    
    // parti pour recuperer les information des utilisateur et les afficher 
    document.addEventListener("DOMContentLoaded", function () {
        var userTable = document.getElementById("ta");
        
        // Récupérer les utilisateurs du stockage local
        var utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    
        // Parcourir la liste des utilisateurs et afficher leurs informations
        utilisateurs.forEach(function (utilisateur) {
            var tr = document.createElement("tr");
            var c1 = document.createElement("td");
            c1.textContent = utilisateur.prenom;
            var c2 = document.createElement("td");
            c2.textContent = utilisateur.nom;
            var c3 = document.createElement("td");
            c3.textContent = utilisateur.email;
            var c4 = document.createElement("td");
            c4.textContent = utilisateur.type;
            var c5 = document.createElement("td");
    
            // Obtenir la date et l'heure
            var currentDate = new Date();
            c5.textContent = currentDate.toLocaleString();
            
            var c6 = document.createElement("td");
    
            // Calculer le "Statut" en fonction du type d'utilisateur
            if (utilisateur.type === "utilisateur" || utilisateur.type === "medecin") {
                c6.textContent = "en ligne";
            } else {
                // Si l'utilisateur ou le médecin n'est pas connecté
                c6.textContent = "hors ligne";
            }
    
            var c7 = document.createElement("td");
            var a = document.createElement("a");
            a.textContent = "voir";
            a.href = "#";
            c7.appendChild(a);
    
            tr.appendChild(c1);
            tr.appendChild(c2);
            tr.appendChild(c3);
            tr.appendChild(c4);
            tr.appendChild(c5);
            tr.appendChild(c6);
            tr.appendChild(c7);
            userTable.appendChild(tr);
        });
    });
    // parti pour la confurmation de connection si les information des utilisateur sont correcte 
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
    
        // Récupérez les utilisateurs du stockage local
        var utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    
        // Recherchez l'utilisateur correspondant à l'e-mail entré
        var utilisateur = utilisateurs.find(function (user) {
            return user.email === email;
        });
    
        if (utilisateur && utilisateur.motDePasse === password) {
            // Redirigez l'utilisateur vers une page de succès ou effectuez une autre action
            window.location.href = "visiteur.html";
        } else {
            alert("Erreur de connexion. Veuillez vérifier vos informations.");
        }
    });


    //-------------parti pour les medecin------------------------------ 
    var formulaire = document.getElementById("myForm");
    formulaire.addEventListener("submit" , function(event){
        var pwd1 = document.getElementById("pwd1").value;
        var pwd2 = document.getElementById("pwd2").value;
        if(pwd1!=pwd2)
        {
            event.preventDefault();
            alert("les mots de passes ne concordent pas.") ;
        }
        else {
            alert("Formulaire soumis avec succés");
        }

    });
    document.addEventListener("DOMContentLoaded", function () {
  var utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

  // Trouvez le bouton "S'inscrire"
  var boutonInscription = document.getElementById("inscription");
  
  boutonInscription.addEventListener("click", function () {
      var nom = document.querySelector('input[name="nom"]').value;
      var prenom = document.querySelector('input[name="prenom"]').value;
      var date = document.querySelector('input[name="date"]').value;
      var tel = document.querySelector('input[name="tel"]').value;
      var specialite = document.querySelector('input[name="specialite"]').value;
      var structure = document.querySelector('input[name="structure"]').value;
      var horaire = document.querySelector('input[name="horaire"]').value;
      var email = document.querySelector('input[name="email"]').value;
      var pwd1 = document.querySelector('input[name="pwd1"]').value;

      // Créez un objet pour stocker les données du médecin
      var medecin = {
          nom: nom,
          prenom: prenom,
          date: date,
          tel: tel,
          specialite: specialite,
          structure: structure,
          horaire: horaire,
          email: email,
          pwd1: pwd1,
          type: "medecin"
      };

      // Ajoutez le nouveau médecin à la liste des utilisateurs
      utilisateurs.push(medecin);

      // Enregistrez la liste mise à jour dans le stockage local
      localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

      alert("Inscription du médecin effectuée.");

      // Effacez les champs du formulaire
      document.querySelector('input[name="nom"]').value = "";
      document.querySelector('input[name="prenom"]').value = "";
      document.querySelector('input[name="date"]').value = "";
      document.querySelector('input[name="tel"]').value = "";
      document.querySelector('input[name="specialite"]').value = "";
      document.querySelector('input[name="structure"]').value = "";
      document.querySelector('input[name="horaire"]').value = "";
      document.querySelector('input[name="email"]').value = "";
      document.querySelector('input[name="pwd1"]').value = "";
      document.querySelector('input[name="pwd2"]').value = "";
  });
});



