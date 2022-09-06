//typeof Guards
function triple(value: number | string) {
    if(typeof value === 'string') {
        return value.repeat(3)
    }

    return value * 3
}

//Truthiness Guards
const printLetters = (word: string | null) => {         //(word?: string) Alternative
    if(word) {
        for(let char of word) {
            console.log(char)
        }
    } else {
        console.log('No words')
    }
}

//Equality Narrowing
function equal(x: string | number, y: string | boolean) {
    if(x === y) {
        x.toUpperCase()
        y.toUpperCase()
    }
}

//Narrowing with the IN operator
interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration
    }

    return media.duration
}

//Narrowing with instanceOf
function printFullDate(date: string | Date){
    if(date instanceof Date) {
        console.log(date.toUTCString())
    } else {
        console.log(new Date(date).toUTCString)
    }
}

//Another example
class User {
    constructor(public name: string){}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if(entity instanceof User) {
        console.log(entity.name)
    } else {
        console.log(entity.name)
    }
}

//Type Predicates
interface Cat {
    name: string
    numLives: number
}

interface Dog {
    name: string
    breed: string
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        //animal
        return "Meow"
    } else {
        //animal
        return "Woof"
    }
}

//Discriminated Unions

interface Rooster {
    name: string,
    weigth: number,
    age: number,
    kind: "rooster"
}

interface Cow {
    name: string,
    weigth: number,
    age: number,
    kind: "cow"
}

interface Pig {
    name: string,
    weigth: number,
    age: number,
    kind: "pig"
}

type FarmAnimal = Pig | Rooster | Cow

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind){
        case("pig"):
            return "oink"
        case("cow"):
            return "muu"
        case("rooster"):
            return "kiki"
        default:
            //We should never make it here, if we handled all cases correctly
            //Por ej si agrego un nuevo tipo de animal y olvido de incluir el campo "kind"
            const _exhaustiveCheck: never = animal
            return _exhaustiveCheck
    }
}

const stevie: Rooster = {
    name: "Stevie Chick",
    weigth: 2,
    age: 1.5,
    kind: "rooster"
}

console.log(getFarmAnimalSound(stevie))