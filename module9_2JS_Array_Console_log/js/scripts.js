var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

function addName(x) {
    if (allNames.indexOf(x) === -1) {
        return allNames.push(x);
    } else {
        return "to imie juz wystepuje";
    }
}

console.log (addName("Marian"));
console.log(allNames);
console.log (addName("Marek"));
console.log(allNames);
