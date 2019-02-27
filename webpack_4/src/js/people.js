function getHello() {
    return 'Hello there WEBPACK 4!';
}

//Esporto una stringa hardcoded
//module.exports = 'Hello Hello Hello!!';

//Esporto il valore ritornato dalla funzione getHello
//module.exports = getHello();

let people = [{
        name: 'John Doe 4'
    },
    {
        name: 'Steve Smith 4'
    },
    {
        name: 'Carol Williams 4'
    }
];

module.exports = people; 