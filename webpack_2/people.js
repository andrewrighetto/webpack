function getHello() {
    return 'Hello there!';
}

//Esporto una stringa hardcoded
//module.exports = 'Hello Hello Hello!!';

//Esporto il valore ritornato dalla funzione getHello
//module.exports = getHello();

let people = [{
        name: 'John Doe'
    },
    {
        name: 'Steve Smith'
    },
    {
        name: 'Carol Williams'
    }
];

module.exports = people; 