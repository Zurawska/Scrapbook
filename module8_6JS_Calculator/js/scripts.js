var dzialanie = prompt('Wpisz dzialanie')

var a = Number(prompt('Enter value a'))
var b = Number(prompt('Enter value b'))

if (dzialanie=='+') {
    var value = (a + b);
    console.log('wynik dodawania');
} else if (dzialanie=='-') {
    var value = (a - b);
    console.log('wynik odejmowania');
} else if (dzialanie=='*') {
    var value = (a * b);
    console.log('wynik mnozenia');
} else if (dzialanie=='/') {
    var value = (a / b);
    console.log('wynik dzielenia');
}

alert(value);
console.log(value);
