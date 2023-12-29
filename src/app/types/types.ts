export interface ITask {
    title: string,
    text: string,
    status: string
    id: string,
    direction: string
    responsible: string
    date: string
}

export interface IUserResponse {
    email: string,
    uid: string,
    accessToken: string
}

export interface IAuthForm {
    classNameEmail: string
    classNamePassword: string

    buttonName: string
    buttonClassName: string
    onClick: (email: string, password: string) => void
}