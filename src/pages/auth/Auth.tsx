import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
} from "@mui/material";
import { MailOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { LoginProps } from "../../lib/types";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>({});
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const onSubmit = async (data: LoginProps) => {
        setIsLoading(true);

        try {
            const success = await login(data);

            if (success) {
                navigate("/auth/verify")
                
            }
        } catch (error) {
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box className="flex flex-col items-center justify-center min-h-screen bg-[#000000] font-Sofia text-[#E2E2E2]">
            <img
                src="/EDITH_logo_png.png"
                alt="logo"
                className="h-16"
            />
            {/* form */}
            <Box className="w-full max-w-sm p-6 space-y-6">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-start space-y-6"
                >
                    <FormControl
                        sx={{
                            width: "100%",
                            backgroundColor: "#FFFFFF0D",
                        }}
                        variant="outlined"
                    >
                        <InputLabel
                            htmlFor="outlined-adornment-email"
                            sx={{
                                color: "#E2E2E2",
                                "&.Mui-focused": {
                                    color: "#E2E2E2",
                                },
                            }}
                        >
                            Email
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            type="email"
                            error={!!errors.email}
                            endAdornment={
                                <InputAdornment position="end">
                                    <MailOutline sx={{ color: "#FFFFFF" }} />
                                </InputAdornment>
                            }
                            label="Email"
                            sx={{
                                color: "#E2E2E2", // Change input text color
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#FFFFFF33", // Change border color
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#FFFFFF66", // Optional: Change border color on hover
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#FFFFFF66", // Optional: Change border color when focused
                                },
                            }}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <Typography
                                variant="caption"
                                color="error"
                                sx={{ pt: 1, color: "#FF0000", bgcolor: "#000000" }}
                            >
                                {errors.email.message}
                            </Typography>
                        )}
                    </FormControl>
                    <FormControl
                        sx={{
                            width: "100%",
                            backgroundColor: "#FFFFFF0D",
                        }}
                        variant="outlined"
                    >
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            sx={{
                                color: "#E2E2E2",
                                "&.Mui-focused": {
                                    color: "#E2E2E2",
                                },
                            }}
                        >
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={isPasswordVisible ? "text" : "password"}
                            error={!!errors.password}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        sx={{ minWidht: 0, padding: 0, color: "#FFFFFF" }}
                                    >
                                        {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                    </Button>
                                </InputAdornment>
                            }
                            label="Password"
                            sx={{
                                color: "#E2E2E2", // Change input text color
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#FFFFFF33", // Change border color
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#FFFFFF66", // Optional: Change border color on hover
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#FFFFFF66", // Optional: Change border color when focused
                                },
                            }}
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && (
                            <Typography
                                variant="caption"
                                color="error"
                                sx={{ pt: 1, color: "#FF0000", bgcolor: "#000000" }}
                            >
                                {errors.password.message}
                            </Typography>
                        )}
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isLoading}
                        className="!bg-[#FAFAFA]/80 hover:!bg-[#FFFFFF] h-10 disabled:!bg-[#FAFAFA]/80 !text-[#000000] !text-sm"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                Logging ...
                                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                            </span>
                        ) : (
                            "Login to Admin Panel"
                        )}
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default Auth