import readInfoFile from "./ReadFileModule.mjs";
import menu from "./menuPrinter.mjs";

const gotData = readInfoFile(`./Logs_And_Files/Tasks.json`)

if((gotData) && (gotData.length > 0)){
    for(const{taskTitle, taskDesc,taskStatus,taskId} of gotData){
        console.log("")
        menu(`${taskId}`)
        console.log(`Task Title: ${taskTitle}`)
        console.log(`Task Desc: ${taskDesc}`)
        console.log(`Task Status: ${taskStatus}`)
        console.log(`Task Id: ${taskId}`)
        console.log("")
    }
}
else if(gotData.length === 0 ){
    console.log("No Tasks Present")
    
}

