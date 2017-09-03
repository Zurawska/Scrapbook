var array = document.getElementsByClassName('button');
var lengthOfArray = array.length;

console.log(array);
console.log(lengthOfArray);

for (var i = 0; i < lengthOfArray; i++ ) {
    alert(array[i].innerText);
}
