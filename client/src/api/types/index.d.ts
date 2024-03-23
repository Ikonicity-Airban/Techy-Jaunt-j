export type IUser = {
    firstName: string;
    lastName: string;
    codeName: string;
}

export interface BaseUser {
    email:string
    institution?: string
    matric_no?: string
    password: string
    
}

export type IILoginUser = BaseUser

export type ICreatedUser = {
    name: string
    email?: string,
    faculty?: string,
    department?: string,
} & BaseUser