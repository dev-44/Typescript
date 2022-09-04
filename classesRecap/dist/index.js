"use strict";
class Player {
    constructor(first, last) {
        this._score = 0; //Inference
        this.first = first;
        this.last = last;
    }
    //Shortcut
    //constructor(public first: string, public last: string, private score: number){}
    /*If a property doesn't have a setter Typscript will set to 'readonly'*/
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative!');
        }
        this._score = newScore;
    }
}
const elton = new Player("Elton", "John");
elton.fullName;
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log('Printed');
    }
}
const jacket1 = new Jacket("Prada", "Black");
//Abstract Class
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    /*You can add functionality in abstract classes, not in interfaces*/
    greet() {
        console.log("Hello");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 70000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Smith", 24, 1100);
console.log(bill.getPay());
