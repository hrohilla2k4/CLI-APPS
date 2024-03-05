import { question } from "readline-sync";
import jFile from "jsonfile"


function checkPassword(password, confirmPassword){
    if(password === confirmPassword){
        // Do nothing
    }
    else{
        console.log("Password do not match, try again")
        process.exit(0) 
    }
}

const RegisterUser = () => {
    const collectInfo = {
        userName : question("What is your name? "),
        userEmail: question("Enter your email: "),
        userDob : question("What is your D.O.B: \u001b[31mEnter in (dd/mm/yyyy): \x1b[0m"), 
        userPassword : question("Enter a password: "),
        confirmPassword : question("Confirm the password: ")
    }
    
    checkPassword(collectInfo.userPassword, collectInfo.confirmPassword);

     jFile.readFile(`./Logs_And_Files/important_information.json`, (err,data)=>{
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









