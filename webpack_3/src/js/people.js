function getHello() {
    return 'Hello there WEBPACK 3!';
}

//Esporto una stringa hardcoded
//module.exports = 'Hello Hello Hello!!';

//Esporto il valore ritornato dalla funzione getHello
//module.exports = getHello();

let people = [{
        name: 'John Doe 3'
    },
    {
        name: 'Steve Smith 3'
    },
    {
        name: 'Carol Williams 3'
    }
];

module.exports = people; 