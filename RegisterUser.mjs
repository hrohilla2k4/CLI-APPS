import { question } from "readline-sync";
import jFile from "jsonfile"

const fileName = 'important_information.txt'

const RegisterUser = () => {
    const collectInfo = {
        userName : question("What is your name? "),
        userEmail: question("Enter your email: "),
        userDob : question("What is your D.O.B: \u001b[31mEnter in (dd/mm/yyyy): \x1b[0m"), 
        userPassword : question("Enter a password: "),
        confirmPassword : question("Confirm the password: ")
    }
    
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
    
    // jFile.readFile(`./Logs_And_Files/important_information.json`, (err,data)=>{
    //     if(!data){
    //         jFile.writeFile(`./Logs_And_Files/important_information.json`,[], {spaces: 2}, (err)=>{
    //             if(err){
    //                 console.log(err)
    //             }    
    //             else{
    //                 console.log("Empty file written")
    //             }
    //         })
    //     }
    //     else {
    //         if (!Array.isArray(data)){
    //             data = [
    //           
    //         ];
    //         }
    //         data.push(userDetails)       
    //     }

        jFile.writeFile(`./Logs_And_Files/important_information.json`,userDetails, {spaces:2}, (err) => {
            if(err){
                console.error(err)
            }
            else{
                console.log("Data appended to file successfully");
            }
        })
}

export default RegisterUser;









