import menu from "./menuPrinter.mjs";
import loginProcess from "./LoginScreen.mjs";
import { question } from "readline-sync";
import TaskManager from "./TaskManager.mjs";
function MenuPage(){
    menu("AIO TASK MANAGE SYSTEM")
    console.log('')
    loginProcess()
    console.log('')
    console.log('\u001b[33m MT for managing tasks : MB for manage program bugs \x1b[0m')

    let userChoice = question("I want to: ")

    if(userChoice == 'MT'){
        TaskManager()
    }
    else if(userChoice == 'MB'){
        // Yet to make
    }
    else{
        console.log("Wrong operation")
    }


}

MenuPage()
