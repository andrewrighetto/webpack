//Questa riga permette di includere un file css senza dover passare dall'HTML
//Viene chiamato loader di css
require('../css/style.css');

let people = require('./people.js');
//let $ = require('jquery');

let aaa = "andrea righetto";



$("body").append('<h1>' + people[0].name + '</h1>');


// $.each(people, function(key, value) {
//     $("body").append('<h1>' + people[key].name + '</h1>');
// })

alert(aaa);
console.log(people);