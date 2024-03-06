import menu from "./menuPrinter.mjs";
import loginProcess from "./LoginScreen.mjs";
import { question } from "readline-sync";
import TaskManager from "./TaskManager.mjs";

function MenuPage(){
    menu("AIO TASK MANAGE SYSTEM")
    console.log('')
    loginProcess()
    console.log('')

    let userChoice

    do{
        console.log('\u001b[33m MT for managing tasks : MB for manage program bugs, PRESS Q TO EXIT\x1b[0m')
        userChoice = question("I want to: ")

    if(userChoice == 'MT'){
        TaskManager()
    }
    else if(userChoice == 'MB'){
        // Yet to make
    }
    else if(userChoice == 'Q'){
        process.exit(0)
    }
    else{
        console.log("Wrong operation")
    }
    } while(userChoice !== 'Q')


}

MenuPage()
