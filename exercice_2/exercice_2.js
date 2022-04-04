/**
 * Utiliser le tableau suivant
 */
const visiteurs = [
  ['Gérard', 'Freschi', 'gfreschi0@discuz.net'],
  ['Bendicty', 'Foster-Smith', 'bfostersmith1@mysql.com'],
  ['Michelle', 'Draude', 'mdraude2@csmonitor.com'],
  ['Cathee', 'Meineck', 'cmeineck3@t-online.de'],
  ['Marianna', 'Coal', 'mcoal4@creativecommons.org'],
];

/**
 * 1. Vérifier si le nom de famille "Meineck" existe dans le tableau. 
 *    Afficher un message en conséquence.
 */

// Solution #1
for (let i = 0; i < visiteurs.length; i++) {
  // console.log(visiteurs[i]);
  for (let j = 0; j < visiteurs[i].length; j++) {
    // console.log(visiteurs[i][j]);
    if (visiteurs[i][j] === 'Meineck') {
      console.log('Hey ho ! Salut toi !');
      // Permet de stopper la boucle
      // Ne fonctionne pas avec un .forEach()
      break;
    }
    else {
      console.log('Je ne te connais pas');
    }
  }
}

// Solution #2
visiteurs.forEach(visiteur => {
  // .includes() permet de vérifier si une valeur est présente
  // dans le tableau
  if (visiteur.includes("Meineck")) {
    console.log('Hey ho ! Salut toi ! #2');
  }
});


/**
 * 2. Trier le tableau par ordre alphabétique selon les prénoms.
 */
visiteurs.sort();
console.log(visiteurs);


/**
 * 3. Créer un tableau contenant que les adresses e-mails 
 *    en utilisant l'instruction map().
 */
const emails = visiteurs.map(visiteur => {
  return visiteur[2];
});

console.log(emails);