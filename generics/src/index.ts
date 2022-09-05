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