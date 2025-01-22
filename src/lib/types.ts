export interface LoginProps {
    email: string;
    password: string;
}

export interface AuthContextType {
    login: (data: LoginProps) => Promise<boolean>;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}