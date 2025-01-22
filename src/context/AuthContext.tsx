import { createContext, useContext, useEffect } from "react";
import { ApiResponse, AuthContextType, LoginProps } from "../lib/types";
import axios from "axios";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const login = async (data: LoginProps) => {
        try {
            const res = await axios.post<ApiResponse<void>>(
                `${import.meta.env.VITE_BACKEND_URL}/auth/login_admin`,
                data
            )
            return true;
        } catch (error) {
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}