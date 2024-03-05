import jFile from "jsonfile"

const readInfoFile = () => {
    const data = jFile.readFileSync(`./Logs_And_Files/important_information.json`)
    return data;
}

export default readInfoFile;