import readInfoFile from "./ReadFileModule.mjs";
import menu from "./menuPrinter.mjs";

const gotData = readInfoFile(`./Logs_And_Files/Tasks.json`)
 

function ShowAllTasks(){
    if((gotData) && (gotData.length > 0)){
        for(let task of gotData){
            console.log("")
            menu(`${task.taskId}`)
            console.log(`Task Title: ${task.taskTitle}`)
            console.log(`Task Desc: ${task.taskDesc}`)
            console.log(`Task Status: ${task.taskStatus}`)
            console.log(`Task Id: ${task.taskId}`)
            console.log("")
        }
    }
    else if(gotData.length === 0 ){
        console.log("No Tasks Present")
    }    
}

export default ShowAllTasks