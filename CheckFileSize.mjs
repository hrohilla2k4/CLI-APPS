import fs from 'node:fs'
import menu from './menuPrinter.mjs';

function checkFileSize(fileNameWithExtension){
    menu("File Stats")
    console.log(`Stats for: ${fileNameWithExtension}`)
    const stats = fs.statSync(fileNameWithExtension);
    const fileSizeInBytes = stats.size;
    console.log(`File size: ${fileSizeInBytes} bytes`);
}


export default checkFileSize;