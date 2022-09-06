// const nums: number[] = []
const nums: Array<number> = []
const color: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>("#username")!
console.dir(inputEl)
inputEl.value = "Hacked!"

const btn = document.querySelector<HTMLButtonElement>(".btn")!

function numberIdentity(item: number): number {
    return item
}

function stringIdentity(item: string): string {
    return item
}

function booleanIdentity(item: boolean): boolean {
    return item
}

//Generics
function identity<Type> (item: Type): Type {
    return item
}

//Another example
function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx]
}

console.log(getRandomElement<string>(["a", "b", "c"]))
console.log(getRandomElement<number>([5, 7, 9]))
console.log(getRandomElement<boolean>([true, false, true]))

//Inferred Generic  Type Parameters
console.log(getRandomElement(["a", "b", "c"]))

//Generics with multiple types
function merge<T,U>(object1: T, object2: U) {
   return {
      ...object1,
      object2
   }
}

const combo = merge({name: 'Oscar'}, {hobbies: ["videogames", "guitar"]})

//Type Constraints
function merge2<T extends object, U extends object>(object1: T, object2: U) {
   return {
      ...object1,
      object2
   }
}


interface Lengthy {
   length: number
}

function printDoubleLength<T extends Lengthy>(param: T): number {
   return param.length * 2
}

//Alternative
function printDoubleLength2(param: Lengthy): number {
   return param.length * 2
}

//Default Type Parameters
function makeEmptyArray<T = number>(): T[] {
   return []
}

makeEmptyArray<string>()
makeEmptyArray<boolean>()
makeEmptyArray()

//Generic Classes
interface Song {
   title: string
   artist: string
}

interface Video {
   title: string
   creator: string
   resolution: string
}

class Playlist<T> {
   public queue: T[] = []

   add(element: T) {
      this.queue.push(element)
   }
}

const songs = new Playlist<Song>()
const video = new Playlist<Video>()