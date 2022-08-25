console.log(Math.round(3.997));
var movieTitle = "Titanic";
movieTitle = "Jurassic Park";
function square(num) {
    return num * num;
}
var greeting = function (person) {
    if (person === void 0) { person = "NoName"; }
    return "Hi ".concat(person);
};
console.log(square(3));
console.log(greeting('Oscar'));
function sample(n) {
    return n * n;
}
//Return various types
function rando(num) {
    if (Math.random() > 0.5) {
        return num.toString();
    }
    return num;
}
