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