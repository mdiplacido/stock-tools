import { DataKind } from "../data-kind";
import { PATHS } from "./../config";
import { FsAsync } from "./../fs-async";

async function makeCachePath(kind: DataKind, name: string): Promise<string> {
    // ensure path
    const baseDir = `${PATHS.cachePath}/${kind}`;
    // tslint:disable-next-line:no-expression-statement
    await FsAsync.mkdirAsync(baseDir);
    return `${baseDir}/${name}.json`;
}

export async function writeResult(kind: DataKind, name: string, data: any): Promise<any> {
    const fullPath = await makeCachePath(kind, name);
    // tslint:disable-next-line:no-expression-statement
    await FsAsync.writeAsync(fullPath, JSON.stringify(data));
    return data;
}

export async function tryLoadFromCache(kind: DataKind, name: string): Promise<{ readonly exists: boolean, readonly data: any }> {
    const fullPath = await makeCachePath(kind, name);
    const exists = await FsAsync.pathExists(fullPath);

    // tslint:disable-next-line:no-if-statement
    if (exists) {
        console.warn(`Using cached data: ${fullPath}`);
    }

    return exists ? 
        ({ exists: true, data: await FsAsync.readFileAsync(fullPath) }) :
        ({ exists: false, data: null })

}