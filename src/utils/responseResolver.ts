interface ResponseResolver<T> {
    code: number;
    message: string;
    data?: T
}

export const responseResolver = <T>(code: number, message: string, data: T,): ResponseResolver<T> => {
    return { code, message, data }
}