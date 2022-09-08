import Dog from './Dog'
import ShelterDog from './ShelterDog'
import {add, multiply, divide} from './utils'

const elton = new Dog("Elton", "aussie", 0.5)
elton.bark()

console.log(add(4,5))
console.log(multiply(4,5))
console.log(divide(20,2))

const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Arkansas Shelter")