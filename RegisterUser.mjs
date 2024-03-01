import { question } from "readline-sync";
import fs from "node:fs"
import { exit } from "node:process";
import jFile from "jsonfile"

console.log("* Need your file path to store information *")
console.log("* Simply enter the file name if you want to store file in same directory *")
console.log("* Enter whole new path for another directory *")

const fileName = 'important_information.txt'

let userName = question("What is your name? ");

let userEmail = question("Enter your email ");

let userDob = question("What is your dob \u001b[31mEnter in (dd/yy/mm)] ");

let userPassword = question("Enter password you want ");

let confirmPassword = question("Confirm the password by entering again: ");

if(userPassword !== confirmPassword){
    console.log("Password do not match, try again")
    exit();
}

const userDetails = {
    userName,
    userEmail,
    userDob,
    userPassword,
    confirmPassword
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










