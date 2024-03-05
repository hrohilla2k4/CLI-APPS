import jFile from 'jsonfile'
import { question } from 'readline-sync'

const taskInfo = {
    taskTitle: question("Enter Task Title: "),
    taskDesc: question("Task Description: "),
    taskStatus: question("Task Status: \u001b[31m'C'(Complete) 'P'(Pending) 'A' (Aborted):  \x1b[0m"),
}

const AddTask = () => {
    jFile.readFile(`./Logs_And_Files/Tasks.json`, (err,data)=>{
        if(!data){
            jFile.writeFile(`./Logs_And_Files/Tasks.json`,[taskInfo],{spaces: 2}, (err)=>{
                if(err){
                    console.log(err)
                }    
                else{
                    console.log("Empty file written")
                }
            })
        }
        else {
            if (Array.isArray(data)){
                data.push(taskInfo)
                jFile.writeFile(`./Logs_And_Files/Tasks.json`,data,{spaces: 2}, (err)=> {
                    if(err){
                        console.error(err)
                    }
                    else{
                        console.log(data)
                    }
                })
            }    
        }
         } 
             )

} 


export default AddTask();

