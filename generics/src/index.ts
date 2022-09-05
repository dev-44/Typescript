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