import * as fs from "fs-extra";

export const FsAsync = {
    mkdirAsync: fs.mkdirp,
    pathExists: fs.pathExists,    
    readFileAsync: fs.readFile,    
    writeAsync: fs.writeFile,
};