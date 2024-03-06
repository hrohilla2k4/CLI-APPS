import { question } from "readline-sync";
import readInfoFile from "./ReadFileModule.mjs";
import menu from "./menuPrinter.mjs";
import AddTask from "./AddTask.mjs";
import ShowAllTasks from "./ShowAllTasks.mjs";
import EditTask from "./EditTask.mjs";

function TaskManager(){
    menu("TASK MANAGER")

console.log('\u001b[33m A for add task : S for show all tasks : U for update task \x1b[0m')

const userChoice = question("I want to: ")

switch(userChoice){
    case 'A':
        AddTask()
        break;
    case 'S':
        ShowAllTasks()
        break;
    case 'U':
        EditTask()
        break;
    default:
        console.log("Wrong operation")
}   
}

TaskManager()

export default TaskManager
