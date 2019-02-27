//Ottiene ciò che è stato esportato dal module.export
//alert(require('./people.js'));

//esempio per vedere il risultato dell'oggetto people
//console.log(require('./people.js'));

let people = require('./people.js');
console.log(people[0].name);