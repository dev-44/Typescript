//A function that recieve an object as parameter
function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: 'Thomas', last: 'Jenkins'})

//Shape an Object
let coordinates: {x: number, y: number} = {x: 34, y:2}

//A function that returns an object
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y: Math.random()}
}

//Type Aliases
type Point = {
    x: number,
    y: number
    z?: number              // ? = optional
}

let coordinate2: Point = {x: 34, y: 2}

function randomCoordinate2(): Point {
    return {x: Math.random(), y: Math.random()}
}

function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2}
}

//Nested Objects
type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.00333
}

//readonly modifier
type User = {
    readonly id: number,
    username: string
}

//Type Intersection
type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number
}

const specimen: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 8
}