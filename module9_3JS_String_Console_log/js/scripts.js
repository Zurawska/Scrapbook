var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCase = dinosaur.toUpperCase();
console.log(dinosaur.toUpperCase());

var replaceText = (text.replace('Velociraptor', dinosaurUpperCase));
console.log(replaceText);

console.log(replaceText.slice (0, (replaceText.length/2)));
