import menu from "./menuPrinter.mjs";
import loginProcess from "./LoginScreen.mjs";
import { question } from "readline-sync";
import TaskManager from "./TaskManager.mjs";

menu("AIO TASK MANAGE SYSTEM")

 function MenuPage(){

    let userChoice

        console.log('\u001b[33m MT for managing tasks : MB for manage program bugs\x1b[0m')
        userChoice = question("I want to: ")

            switch(userChoice){
                case 'MT':
                    TaskManager()   
                    break;
                case 'MB':
                    //yet to make
                    break;
                default:
                    console.log("Wrong operation")
            }
         
 }


export default MenuPage;












