function getTriangleArea(a, h) {
    if (a > 0 && h>0) {
        return a*h/2;
    } else {
        return "Nieprawidlowe dane";
    }
}

console.log( getTriangleArea(10,6) )

var a = getTriangleArea(10,5)
var b = getTriangleArea(4,3)
var c = getTriangleArea(8,2)

console.log( a )
console.log( b )
console.log( c )
