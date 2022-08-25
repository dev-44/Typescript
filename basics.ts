console.log(Math.round(3.997))

var movieTitle: string = "Titanic"
movieTitle = "Jurassic Park"


function square(num: number) {
    return num * num
}

const greeting = (person: string = "NoName") => {
    return `Hi ${person}`
}


console.log(square(3))
console.log(greeting('Oscar'))

function sample (n: number): number {
    return n * n
}

//Return various types
function rando(num: number) {
    if(Math.random() > 0.5) {
        return num.toString()
    }
    return num
}

//Infers the return number type
function secondsInDay() {
    return 24 * 60 * 60;
}

//Infers the function returns nothing and has the void type.
function doNothing() {
    2 + 2;
}