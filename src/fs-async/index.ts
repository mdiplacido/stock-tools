import * as fs from "fs-extra";

export const FsAsync = {
    mkdirAsync: fs.mkdirp,
    writeAsync: fs.writeFile,
};