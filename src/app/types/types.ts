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
