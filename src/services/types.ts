export interface LoginData {
    email: string,
    password: string
}

export interface SignInData {
    firstName: string
    lastName: string
    email: string,
    phoneNumber: string

    password: string,
    passwordConfirm:string,
    role:string
    
}
export interface RefreshToken {
    refreshToken: string | null,
}