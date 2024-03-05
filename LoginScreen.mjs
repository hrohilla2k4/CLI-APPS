import { question } from "readline-sync";
import RegisterUser from "./RegisterUser.mjs";
import Login from "./LoginUser.mjs";
import menu from "./menuPrinter.mjs";


menu("login screen")

console.log('\u001b[33m R for register : L for login \x1b[0m')

const userChoice = question("I want to: ");

if(userChoice === 'R'){
    RegisterUser()
}

else if(userChoice === 'L'){
    Login()
}