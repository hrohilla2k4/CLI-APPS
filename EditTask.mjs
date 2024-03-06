import readInfoFile from "./ReadFileModule.mjs";
import { question } from "readline-sync";
import jFile from 'jsonfile';

const filePath = 'Logs_And_Files/Tasks.json';
const gotData = readInfoFile(filePath);



function EditTask() {

    const getEditData = {
        taskId: question("Enter Id Of The Task To Edit: "),
        whatToEdit: question("\u001b[32m'TT' For Task Title 'TD' For Task Description 'TS' For Task Status 'TI' For Task Id  \x1b[0m")
    };

    for (let task of gotData) {
        if (getEditData.taskId === task.taskId) {
            switch (getEditData.whatToEdit) {
                case 'TT':
                    task.taskTitle = question("Enter New Task Title: ");
                    console.log(`Task title updated to: ${task.taskTitle}`);
                    break;
                case 'TD':
                    task.taskDesc = question("Enter New Task Description: ");
                    console.log(`Task Description Updated To: ${task.taskDesc}`);
                    break;
                case 'TS':
                    task.taskStatus = question("Enter New Task Status: ");
                    console.log(`Task Status Updated To: ${task.taskStatus}`);
                    break;
                case 'TI':
                    task.taskId = question("Enter New Task Id: ");
                    console.log(`Task ID Updated To: ${task.taskId}`);
                    break;
                default:
                    console.log("Wrong operation");
            }
            // Write the updated data back to the file
            jFile.writeFile(filePath, gotData,{spaces : 2}, (err) => {
                if (err) console.log(err);
            });
            break; // Exit loop after updating
        }
    }
}



export default EditTask;

