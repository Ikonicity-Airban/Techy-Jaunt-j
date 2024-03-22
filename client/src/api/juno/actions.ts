import { Doc, ListParams, deleteDoc, getDoc, listDocs, setDoc, setManyDocs } from "@junobuild/core";

import { AddDocType } from "../types/document-types";
import { nanoid } from "nanoid";

export async function AddOneDoc<T>(collection: string, data: T) {
    const result = await setDoc<T>({
        collection,
        doc: {
            key: nanoid(),
            data
        }
    })

    return result
}


export async function AddManyDoc<T>(collection: string[], data: T[]) {
    const dataArray = []

    let i = 0;
    for (const item of collection) {
        const newArray: AddDocType<T> = {
            collection: item,
            doc: {
                key: nanoid(),
                data: data[i]
            }
        }
        dataArray.push(newArray)
        i++
    }


    const result = await setManyDocs({
        docs: dataArray
    })

    return result
}


export async function GetOneDoc<T>(collection: string, key: string) {
    const result = await getDoc<T>({
        collection,
        key,
    })

    return result
}


export async function ListDocs<T>(collection: string, filter: ListParams) {
    const result = await listDocs<T>({
        collection,
        filter,
    })

    return result
}
export async function UpdateOneDoc<T>(collection: string, prevDoc: Doc<T>, newDoc: T) {
    const result = await setDoc<T>({
        collection,
        doc: {
            ...prevDoc, // includes 'key' and 'updated_at'
            data: newDoc
        }
    });

    return result
}


export async function DeleteOneDoc<T>(collection: string, doc: Doc<T>) {
    const result = await deleteDoc<T>({
        collection,
        doc,
    })

    return result
}