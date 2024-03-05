import jFile from "jsonfile"

const readInfoFile = () => {
    return new Promise((rej,res) => {
        jFile.readFile(`./Logs_And_Files/important_information.json`, (err,data)=>{
            if(err){
                rej("Error reading file")
            }
            else{
                res(data)
                console.log(data, "Print from - readfilemodule")
            }
        })
    })
}

export default readInfoFile;