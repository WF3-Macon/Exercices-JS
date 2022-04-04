/**
 * Utiliser le tableau suivant
 */
let numbers = [12, 56, 83, 45, 7, 56, 4, 14, 29];

/**
 * 1. Multiplier par 2 chaque valeur de ce tableau et afficher les résultats dans la console.
 */
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

let i = 0;
while(i < numbers.length) {
    console.log(numbers[i] * 2);
    i++;
}

numbers.forEach(number => {
    console.log(number * 2);
});

/**
 * 2. Afficher la moyenne du tableau en utilisant la fonction reduce().
 *    Si la moyenne est une décimale, limité le nombre après la virgule à 2.
 */
const total = numbers.reduce((somme, nombre) => somme + nombre);
console.log(total);

const moyenne = total / numbers.length;
console.log(moyenne.toFixed(2));

/**
 * 3. Extraire tous les nombres impairs de ce tableau. Utiliser l'instruction filter().
 */
const impairs = numbers.filter(number => {
    return number%2 === 1;
}); 

console.log(impairs);