type LoginActionPayload = {
    username: string;
    name: string;
}
export type AuthActionType = 
    { type: '@logout' } | 
    { type: '@login', payload: LoginActionPayload };