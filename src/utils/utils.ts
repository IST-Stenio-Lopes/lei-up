export type IAuth = {
    acessToken: string,
    displayName: string,
    email: string,
    uid: string,
    userType: 'client' | 'attorney' | ''
}