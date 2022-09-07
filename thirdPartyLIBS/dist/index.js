"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
    console.log("It worked!");
    //console.log(res.data)
    const { data } = res;
    printUser(data);
})
    .catch(error => {
    console.log(error);
});
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
    console.log("It worked!");
    //console.log(res.data)
    res.data.forEach(printUser);
})
    .catch(error => {
    console.log(error);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log('\n');
}
