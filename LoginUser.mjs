import { question } from "readline-sync";
import readInfoFile from "./ReadFileModule.mjs";

let gotData;

const getDataFromFile = async () => {
    try {
        gotData = await readInfoFile();
    } catch (error) {
        console.error(error)
    }
    
}

const Login =  () => {
    getDataFromFile();
}

export default Login;
