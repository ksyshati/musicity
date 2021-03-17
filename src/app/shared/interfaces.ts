export interface User {
    email: string;
    password: string;
    returnSecureToken?: boolean;
 }
export interface FbAuthResponse {
    idToken: string;
    expiresIn: string;
 }
export interface MusicalCard {
    id?: string;
    name: string;
}
export interface FbCreateResponse {
    name: string;
}

export interface Comment {
    id?: string;
    name: string;
    text: string;
    date: Date;
}
