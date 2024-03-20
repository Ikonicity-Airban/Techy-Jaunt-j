export type IUser = {
    firstName: string;
    lastName: string;
    codeName: string;
}

export type AddDocType<T> = {
    collection: string
    doc: {
        key: string
        data: T
    }
};
