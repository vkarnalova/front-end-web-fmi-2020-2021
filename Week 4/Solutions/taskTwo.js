class Person {
    name;
    planet = 'Земя';
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(`Здравей ${this.name} от планетата ${this.planet}`);
    }
}

var personOne = new Person('Чък Норис');
personOne.print();
var personTwo = new Person('Майк Норис');
personTwo.print();
var personThree = new Person('Ерик Норис');
personThree.print();