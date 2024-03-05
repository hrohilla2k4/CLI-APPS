import { question } from "readline-sync";
import jFile from "jsonfile"
import readInfoFile from "./ReadFileModule.mjs";

let collectInfo;

// Read old data present (if any)
const fileOldData = readInfoFile();

function checkPassword(password, confirmPassword){
    if(password === confirmPassword){
        // Do nothing
    }
    else{
        console.log("Password do not match, try again")
        process.exit(0) 
    }
}

function checkUniqueData(data,username){
    for(const{userName} of data){
        if(userName == username){
            console.log("Username not available, add numbers like - 2k4 or other")
            collectInfo.userName = question("Enter another username");
        }
        else{
            // Do nothing. 
        }
    }
}

const RegisterUser = () => {
    
        collectInfo = {
        userName : question("What is your name? "),
        userEmail: question("Enter your email: "),
        userDob : question("What is your D.O.B: \u001b[31mEnter in (dd/mm/yyyy): \x1b[0m"), 
        userPassword : question("Enter a password: "),
        confirmPassword : question("Confirm the password: ")
    }
    
    checkPassword(collectInfo.userPassword, collectInfo.confirmPassword);

     jFile.readFile(`./Logs_And_Files/important_information.json`, (err,data)=>{
        checkUniqueData(fileOldData, collectInfo.userName);
        if(!data){
            jFile.writeFile(`./Logs_And_Files/important_information.json`,[collectInfo],{spaces: 2}, (err)=>{
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
                data.push(collectInfo)
                checkUniqueData(fileOldData, collectInfo.userName)
                jFile.writeFile(`./Logs_And_Files/important_information.json`,data,{spaces: 2}, (err)=> {
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

export default RegisterUser;









