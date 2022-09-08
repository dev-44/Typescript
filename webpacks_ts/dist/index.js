import Dog from './Dog.js';
import ShelterDog from './ShelterDog.js';
import { add, multiply, divide } from './utils.js';
const elton = new Dog("Elton", "aussie", 0.5);
elton.bark();
console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(20, 2));
const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Arkansas Shelter");
