export type IUser = {
    firstName: string;
    lastName: string;
    codeName: string;
}

export interface BaseUser {
    institution: string
    matric_no: string
}

export type IILoginUser = BaseUser

export type ICreatedUser = {
    email?: string,
    faculty: string,
    department: string,
    name: string
} & BaseUser