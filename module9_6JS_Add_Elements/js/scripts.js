var add = document.getElementById('addElem'),
    list = document.getElementById('list');

add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    var lengthOfLi = document.getElementsByTagName('li').length;
    element.innerHTML = 'item ' + lengthOfLi;
    list.appendChild(element);
});
