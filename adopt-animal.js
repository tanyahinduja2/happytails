var element = document.querySelector('.about');
var extension = element.getAttribute('id');
var aboutLink = `adopt/${extension}.html`;

element.href = aboutLink;

var element2 = document.querySelector('.about-cat');
var extension2 = element2.getAttribute('id');
var aboutLink2 = `adopt/${extension2}.html`;

element2.href = aboutLink2;

var element3 = document.querySelector('.about-cat2');
var extension3 = element3.getAttribute('id');
var aboutLink3 = `adopt/${extension3}.html`;

element3.href = aboutLink3;
