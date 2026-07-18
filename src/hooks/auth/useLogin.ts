import { useMutation } from "@tanstack/react-query";
import { login } from "@/client-api/auth";

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
    });
};