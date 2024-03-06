import jFile from "jsonfile"

const readInfoFile = (filePath) => {
    const data = jFile.readFileSync(filePath)
    return data;
}

export default readInfoFile;