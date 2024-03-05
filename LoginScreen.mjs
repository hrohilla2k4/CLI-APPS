import { question } from "readline-sync";
import RegisterUser from "./RegisterUser.mjs";
import Login from "./LoginUser.mjs";
import menu from "./menuPrinter.mjs";

const start = process.hrtime()
menu("login screen")

console.log('\u001b[33m R for register : L for login \x1b[0m')

const userChoice = question("I want to: ");

if(userChoice === 'R'){
    RegisterUser()
}

else if(userChoice === 'L'){
    Login()
}
const end = process.hrtime(start)

const executionTimeInMs = end[0] * 1000 + end[1] / 1000000;

console.log(`Execution time: ${executionTimeInMs} ms`);

