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
