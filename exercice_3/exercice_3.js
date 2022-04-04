/**
 * Utiliser le tableau suivant
 */
const users = [
  {
    "_id": "6249d07232e70ebcff710acb",
    "age": 28,
    "name": "Silva Payne",
    "email": "silvapayne@extragen.com",
    "phone": "+1 (919) 415-3428"
  },
  {
    "_id": "6249d072ec8960f9c2c4a027",
    "age": 40,
    "name": "Thompson Nieves",
    "email": "thompsonnieves@extragen.com",
    "phone": "+1 (817) 461-2775"
  },
  {
    "_id": "6249d072dd38f69d4166e09f",
    "age": 40,
    "name": "Natasha Stewart",
    "email": "natashastewart@extragen.com",
    "phone": "+1 (858) 509-2708"
  },
  {
    "_id": "6249d0725dc574cbce6bb302",
    "age": 32,
    "name": "Kerr Mckay",
    "email": "kerrmckay@extragen.com",
    "phone": "+1 (954) 592-2431"
  },
  {
    "_id": "6249d07225e39f1d9520db2a",
    "age": 34,
    "name": "Leann Farrell",
    "email": "leannfarrell@extragen.com",
    "phone": "+1 (990) 432-3385"
  },
  {
    "_id": "6249d07246be46a54411e864",
    "age": 37,
    "name": "Snyder Mcneil",
    "email": "snydermcneil@extragen.com",
    "phone": "+1 (818) 461-3429"
  }
];

/**
 * 1. Afficher les noms et les numéros de téléphone dans la console.
 */
users.forEach(user => {
  console.log(`${user.name} ${user.phone}`); // Concaténation
  // console.log(user.name, user.phone);
});

// Extraire deux valeurs dans un nouveau tableau
const listing = users.map(user => {
  return [user.name, user.phone];
})

console.log(listing);


/**
 * 2. Afficher les informations de l'utilisateur ayant cet ID : 6249d07225e39f1d9520db2a
 */
users.forEach(user => {
  if (user._id === "6249d07225e39f1d9520db2a") {
    console.log(user);
  }
});


/**
 * 3. Trouver les années de naissances de chaque utilisateur.
 */
const currentYear = new Date().getFullYear();
users.forEach(user => {
  const birthday = currentYear - user.age;
  console.log(birthday);
});


/**
 * Date
 * https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/
 */
const dateNow = Date.now();
const date = new Date(dateNow);
console.log(date.getHours(), date.getUTCDate(), date.getUTCSeconds());