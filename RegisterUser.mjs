import { question } from "readline-sync";
import fs from "node:fs"
import { exit } from "node:process";
import jFile from "jsonfile"

const collectInfo = {
    userName : question("What is your name? "),
    userEmail: question("Enter your email: "),
    userDob : question("What is your D.O.B: \u001b[31mEnter in (dd/mm/yyyy): \x1b[0m"), 
    userPassword : question("Enter a password: "),
    confirmPassword : question("Confirm the password: ")
}

const fileName = 'important_information.txt'

if(collectInfo.userPassword !== collectInfo.confirmPassword){
    console.log("Password do not match, try again")
    exit();
}

const userDetails = {
    userName: collectInfo.userName,
    userEmail: collectInfo.userEmail,
    userDob: collectInfo.userDob,
    userPassword: collectInfo.userPassword,
    confirmPassword: collectInfo.confirmPassword
}

jFile.readFile(`./Logs_And_Files/important_information.json`, (err,data)=>{
    if(err){
        console.log(err)
    }
    else {
        if (!Array.isArray(data)){
            data = [];
        }
        data.push(userDetails)       
    }
    jFile.writeFile(`./Logs_And_Files/important_information.json`,data, {spaces:2}, (err) => {
        if(err){
            console.error(err)
        }
        else{
            console.log("Data appended to file successfully");
        }
    })
})










