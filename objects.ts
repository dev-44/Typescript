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