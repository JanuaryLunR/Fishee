export declare class LoginUserRequest {
    username: string;
    password: string;
}
export declare class LoginUserResponse {
    user: {
        userId: number;
        username: string;
        password: string;
    };
    msg: string;
}
export declare class LogoutUserResponse {
    msg: string;
}
export declare class LoginCheckResponse {
    userId: number;
    username: string;
    email: string;
}
export declare class SignupResponse {
    id: number;
    username: string;
    email: string;
    updatedAt: string;
    createdAt: string;
}
