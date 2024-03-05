import readInfoFile from "./ReadFileModule.mjs";
import { question } from "readline-sync";

let gotData;
let collectInfo;

// Redundant --> Make it a module and use it in register as well as login
function getUserData(){
     collectInfo = {
        userName : question("What is your name? "), 
        userPassword : question("Enter a password: "),
    }
}

function checkCredentials(data) {
    for(const{userName, userPassword} of data){
        if((userName === collectInfo.userName) && (userPassword === collectInfo.userPassword)){
            console.log("Login success");
        }
        else if((userName === collectInfo.userName) && (userPassword !== collectInfo.userPassword)){
            console.log(`Wrong password for: ${userName}`)
        }   
    }
}

const Login = () => {
    getUserData();
    gotData = readInfoFile();
    checkCredentials(gotData);

}


export default Login;
